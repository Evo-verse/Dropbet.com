import { BetCrudService } from '@api/bet/bet-crud.service';
import { BetOperationResult } from '@api/bet/bet.model';
import { BetService } from '@api/bet/bet.service';
import { BetIdentity } from '@api/bet/utils/bet-helper.utils';
import { TransactionRequestDto } from '@api/sportbook/dto/transaction.dto';
import { SportsbookTransactionsReasonAdapter } from '@api/sportbook/system/types/transaction.type';
import { ApiCode } from '@app/shared/api/exceptions/code';
import { ApiException } from '@app/shared/api/exceptions/http';
import {
  SportsbookErrors,
  SportsbookException,
} from '@app/shared/api/exceptions/sportbook.exception';
import { Injectable } from '@nestjs/common';
import { BetStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ITransactionWithdrawalStrategy } from '../../../interfaces/strategy.interface';

@Injectable()
export class WithdrawalCancelSettleBetStrategy
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
    if (currentBet?.status !== BetStatus.SETTLED) {
      throw new ApiException(ApiCode.ACCOUNTING_TRANSACTION_ALREADY_EXISTS);
    }
    const currentPayout = new Decimal(currentBet.payout);
    const incomeDecreaseAmount = new Decimal(data.amountBreakdown.cash);
    const finalAmount = currentPayout.minus(incomeDecreaseAmount);

    if (finalAmount.gt(0)) {
      throw new SportsbookException(
        SportsbookErrors.invalid_request,
        `Operation cannot be processed because the submitted amount or its type does not match the previously settled payout value: ${currentBet.payout}`,
      );
    }

    return await this.betService.cancelSettleBet(betIdentity, {
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
