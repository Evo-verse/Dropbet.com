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
export class DepositPartialResettleBetStrategy
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
    if (currentBet?.status !== BetStatus.SETTLED) {
      throw new SportsbookException(SportsbookErrors.transaction_not_found);
    }

    return await this.betService.resettleBet(betIdentity, {
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
