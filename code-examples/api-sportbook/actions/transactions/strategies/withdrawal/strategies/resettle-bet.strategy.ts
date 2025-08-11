import { BetCrudService } from '@api/bet/bet-crud.service';
import { BetOperationResult } from '@api/bet/bet.model';
import { BetService } from '@api/bet/bet.service';
import { BetIdentity } from '@api/bet/utils/bet-helper.utils';
import { TransactionRequestDto } from '@api/sportbook/dto/transaction.dto';
import { SportsbookTransactionsReasonAdapter } from '@api/sportbook/system/types/transaction.type';
import { ApiCode } from '@app/shared/api/exceptions/code';
import { ApiException } from '@app/shared/api/exceptions/http';
import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime/library';
import { ITransactionWithdrawalStrategy } from '../../../interfaces/strategy.interface';

@Injectable()
export class WithdrawalResettleBetStrategy
  implements ITransactionWithdrawalStrategy
{
  constructor(
    private readonly betService: BetService,
    private readonly betCrudService: BetCrudService,
  ) {}

  async execute(
    betIdentity: BetIdentity,
    data: TransactionRequestDto,
  ): Promise<BetOperationResult> {
    const currentBet = await this.betCrudService.findUniqueBet(
      betIdentity.betId,
    );

    if (!currentBet) {
      throw new ApiException(ApiCode.BET_IS_NOT_FOUND);
    }
    const currentPayout = new Decimal(currentBet.payout);
    const incomeDecreaseAmount = new Decimal(data.amountBreakdown.cash);
    const finalAmount = currentPayout.minus(incomeDecreaseAmount);

    if (finalAmount.lt(0)) {
      throw new ApiException(ApiCode.BET_RESETTLE_ERROR);
    }

    return await this.betService.resettleBet(betIdentity, {
      sportsbookOperation: {
        cash: new Decimal(data.amountBreakdown.cash),
        transactionId: data.id,
        type: data.type,
        transactionPayload: data.context,
        reason: SportsbookTransactionsReasonAdapter.resettle,
      },
    });
  }
}
