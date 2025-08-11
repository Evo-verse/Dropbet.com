import { BetModule } from '@api/bet/bet.module';
import { GamesModule } from '@api/casino/games/games.module';
import { GatewayApiModule } from '@api/gateway/gateway.module';
import { Module } from '@nestjs/common';
import { WithdrawalCancelSettleBetStrategy } from './strategies/cancelsettle-bet.strategy';
import { WithdrawalCreateBetStrategy } from './strategies/create-bet.strategy';
import { WithdrawalPartialCancelSettleBetStrategy } from './strategies/partial-cancelsettle-bet.strategy';
import { WithdrawalPartialResettleBetStrategy } from './strategies/partial-resettle-bet.strategy';
import { WithdrawalResettleBetStrategy } from './strategies/resettle-bet.strategy';
import { WithdrawalStrategyFactory } from './withdrawal.factory';
import { WithdrawalStrategy } from './withdrawal.strategy';

@Module({
  imports: [BetModule, GamesModule, GatewayApiModule],
  providers: [
    WithdrawalStrategy,
    WithdrawalStrategyFactory,
    WithdrawalCreateBetStrategy,
    WithdrawalResettleBetStrategy,
    WithdrawalCancelSettleBetStrategy,
    WithdrawalPartialResettleBetStrategy,
    WithdrawalPartialCancelSettleBetStrategy,
  ],
  exports: [WithdrawalStrategy],
})
export class WithdrawalStrategyModule {}
