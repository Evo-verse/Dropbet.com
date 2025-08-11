import {
  SportsbookContextReasonEnum
} from '@api/sportbook/system/types/transaction.type';
import {
  SportsbookErrors,
  SportsbookException,
} from '@app/shared/api/exceptions/sportbook.exception';
import { Injectable } from '@nestjs/common';
import { ITransactionDepositStrategy } from '../../interfaces/strategy.interface';
import { DepositPartialResettleBetStrategy } from './strategies/partial-resettle-bet.strategy';
import { DepositPartialSettleBetStrategy } from './strategies/partial-settle-bet.strategy';
import { DepositResettleBetStrategy } from './strategies/resettle-bet.strategy';
import { DepositSettleBetStrategy } from './strategies/settle-bet.strategy';

@Injectable()
export class DepositStrategyFactory {
  private readonly strategies: Record<string, ITransactionDepositStrategy>;

  constructor(
    private readonly depositSettleBetStrategy: DepositSettleBetStrategy,
    private readonly depositResettleBetStrategy: DepositResettleBetStrategy,
    private readonly depositPartialSettleBetStrategy: DepositPartialSettleBetStrategy,
    private readonly depositPartialResettleBetStrategy: DepositPartialResettleBetStrategy,
  ) {
    this.strategies = {
      [SportsbookContextReasonEnum.settle]: this.depositSettleBetStrategy,
      [SportsbookContextReasonEnum.resettle]: this.depositResettleBetStrategy,
      [SportsbookContextReasonEnum.partial_settle]: this.depositPartialSettleBetStrategy,
      [SportsbookContextReasonEnum.partial_resettle]: this.depositPartialResettleBetStrategy,
    };
  }

  public getStrategy(reason: SportsbookContextReasonEnum): ITransactionDepositStrategy {
    return (
      this.strategies[reason] ||
      (() => {
        throw new SportsbookException(
          SportsbookErrors.general_error,
          `Unsupported Deposit strategy reason: ${reason}`,
        );
      })()
    );
  }
}
