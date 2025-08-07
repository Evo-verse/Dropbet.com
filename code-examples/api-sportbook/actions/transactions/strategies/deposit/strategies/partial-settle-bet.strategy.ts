import { BetCrudService } from '@api/bet/bet-crud.service';
import { BetOperationResult } from '@api/bet/bet.model';
import { BetService } from '@api/bet/bet.service';
import { BetIdentity } from '@api/bet/utils/bet-helper.utils';
import { TransactionRequestDto } from '@api/sportbook/dto/transaction.dto';
import { SportsbookTransactionsReasonAdapter } from '@api/sportbook/system/types/transaction.type';
import {
  SportsbookErrors,
  SportsbookException,
} from '@app/shared/api/exceptions/sportbook.exception';
import { Injectable } from '@nestjs/common';
import { BetStatus } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { ITransactionDepositStrategy } from '../../../interfaces/strategy.interface';

@Injectable()
export class DepositPartialSettleBetStrategy
  implements ITransactionDepositStrategy
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
    if (currentBet?.status !== BetStatus.CREATED) {
      throw new SportsbookException(SportsbookErrors.transaction_not_found);
    }
    const currentAmount = new Decimal(currentBet.amount);
    const incomeDecreaseAmount = new Decimal(data.amountBreakdown.cash);
    const finalAmount = currentAmount.minus(incomeDecreaseAmount);

    if (finalAmount.lt(0)) {
      throw new SportsbookException(
        SportsbookErrors.invalid_request,
        `Operation cannot be processed because the submitted amount or its type does not match the previously created amount value: ${currentBet.amount}`,
      );
    }
    return await this.betService.updateBet(betIdentity, {
      sportsbookOperation: {
        cash: new Decimal(data.amountBreakdown.cash),
        transactionId: data.id,
        type: data.type,
        reason: SportsbookTransactionsReasonAdapter.cancel,
        transactionPayload: data.context,
      },
    });
  }
}
