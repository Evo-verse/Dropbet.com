import { BetOperationResult } from '@api/bet/bet.model';
import { BetIdentity } from '@api/bet/utils/bet-helper.utils';
import {
  TransactionRequestDto,
  TransactionResponseDto,
} from '../../../dto/transaction.dto';

export interface ITransactionStrategy {
  execute(
    userId: number,
    data: TransactionRequestDto,
  ): Promise<TransactionResponseDto>;
}

export interface ITransactionWithdrawalStrategy {
  execute(
    betIdentity: BetIdentity,
    data: TransactionRequestDto,
  ): Promise<BetOperationResult>;
}

export interface ITransactionDepositStrategy
  extends ITransactionWithdrawalStrategy {}
