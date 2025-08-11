import { BetOperationResult } from '@api/bet/bet.model';
import { BetService } from '@api/bet/bet.service';
import { BetIdentity } from '@api/bet/utils/bet-helper.utils';
import { TransactionRequestDto } from '@api/sportbook/dto/transaction.dto';
import { Injectable } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime/library';
import { ITransactionWithdrawalStrategy } from '../../../interfaces/strategy.interface';

@Injectable()
export class WithdrawalCreateBetStrategy
  implements ITransactionWithdrawalStrategy
{
  constructor(private readonly betService: BetService) {}

  async execute(
    betIdentity: BetIdentity,
    data: TransactionRequestDto,
  ): Promise<BetOperationResult> {
    return await this.betService.createBet(betIdentity, {
      sportsbookOperation: {
        cash: new Decimal(data.amountBreakdown.cash),
        transactionId: data.id,
        type: data.type,
        transactionPayload: data.context,
      },
    });
  }
}
