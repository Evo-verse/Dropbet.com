import { TransactionSportbookType } from '@api/sportbook/system/types/transaction.type';
import {
  SportsbookErrors,
  SportsbookException,
} from '@app/shared/api/exceptions/sportbook.exception';
import { Injectable } from '@nestjs/common';
import { ITransactionStrategy } from './interfaces/strategy.interface';
import { DepositStrategy } from './strategies/deposit/deposit.strategy';
import { RollbackStrategy } from './strategies/rollback.strategy';
import { WithdrawalStrategy } from './strategies/withdrawal/withdrawal.strategy';

@Injectable()
export class TransactionStrategyFactory {
  private readonly strategies: {
    [key in TransactionSportbookType]: ITransactionStrategy;
  };

  constructor(
    private readonly withdrawalStrategy: WithdrawalStrategy,
    private readonly rollbackStrategy: RollbackStrategy,
    private readonly depositStrategy: DepositStrategy,
  ) {
    this.strategies = {
      [TransactionSportbookType.deposit]: this.depositStrategy,
      [TransactionSportbookType.withdrawal]: this.withdrawalStrategy,
      [TransactionSportbookType.rollback]: this.rollbackStrategy,
    };
  }

  public getStrategy(type: TransactionSportbookType): ITransactionStrategy {
    return (
      this.strategies[type] ||
      (() => {
        throw new SportsbookException(
          SportsbookErrors.general_error,
          `Unsupported transaction type: ${type}`,
        );
      })()
    );
  }
}
