import {
  SportsbookContextReasonEnum
} from '@api/sportbook/system/types/transaction.type';
import {
  SportsbookErrors,
  SportsbookException,
} from '@app/shared/api/exceptions/sportbook.exception';
import { Injectable } from '@nestjs/common';
import { ITransactionWithdrawalStrategy } from '../../interfaces/strategy.interface';
import { WithdrawalCancelSettleBetStrategy } from './strategies/cancelsettle-bet.strategy';
import { WithdrawalCreateBetStrategy } from './strategies/create-bet.strategy';
import { WithdrawalPartialCancelSettleBetStrategy } from './strategies/partial-cancelsettle-bet.strategy';
import { WithdrawalPartialResettleBetStrategy } from './strategies/partial-resettle-bet.strategy';
import { WithdrawalResettleBetStrategy } from './strategies/resettle-bet.strategy';

@Injectable()
export class WithdrawalStrategyFactory {
  private readonly strategies: Record<string, ITransactionWithdrawalStrategy>;

  constructor(
    private readonly withdrawalCreateBetStrategy: WithdrawalCreateBetStrategy,
    private readonly withdrawalResettleBetStrategy: WithdrawalResettleBetStrategy,
    private readonly withdrawalCancelsettleBetStrategy: WithdrawalCancelSettleBetStrategy,
    private readonly withdrawalPartialResettleBetStrategy: WithdrawalPartialResettleBetStrategy,
    private readonly withdrawalPartialCancelSettleBetStrategy: WithdrawalPartialCancelSettleBetStrategy,
  ) {
    this.strategies = {
      [SportsbookContextReasonEnum.bet]: this.withdrawalCreateBetStrategy,
      [SportsbookContextReasonEnum.resettle]: this.withdrawalResettleBetStrategy,
      [SportsbookContextReasonEnum.cancelsettle]: this.withdrawalCancelsettleBetStrategy,
      [SportsbookContextReasonEnum.partial_resettle]: this.withdrawalPartialResettleBetStrategy,
      [SportsbookContextReasonEnum.partial_cancelsettle]: this.withdrawalPartialCancelSettleBetStrategy,      
    };
  }

  public getStrategy(reason: SportsbookContextReasonEnum): ITransactionWithdrawalStrategy {
    return (
      this.strategies[reason] ||
      (() => {
        throw new SportsbookException(
          SportsbookErrors.general_error,
          `Unsupported Withdrawal strategy reason: ${reason}`,
        );
      })()
    );
  }
}
