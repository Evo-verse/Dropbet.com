import { BetModule } from '@api/bet/bet.module';
import { GamesModule } from '@api/casino/games/games.module';
import { GatewayApiModule } from '@api/gateway/gateway.module';
import { Module } from '@nestjs/common';
import { DepositStrategyFactory } from './deposit.factory';
import { DepositStrategy } from './deposit.strategy';
import { DepositPartialResettleBetStrategy } from './strategies/partial-resettle-bet.strategy';
import { DepositPartialSettleBetStrategy } from './strategies/partial-settle-bet.strategy';
import { DepositResettleBetStrategy } from './strategies/resettle-bet.strategy';
import { DepositSettleBetStrategy } from './strategies/settle-bet.strategy';

@Module({
  imports: [BetModule, GamesModule, GatewayApiModule],
  providers: [
    DepositStrategy,
    DepositStrategyFactory,
    DepositSettleBetStrategy,
    DepositResettleBetStrategy,
    DepositPartialSettleBetStrategy,
    DepositPartialResettleBetStrategy,
  ],
  exports: [DepositStrategy],
})
export class DepositStrategyModule {}
