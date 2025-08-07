import { AccountingModule } from '@api/accounting/accounting.module';
import { BetModule } from '@api/bet/bet.module';
import { GatewayApiModule } from '@api/gateway/gateway.module';
import { UserModule } from '@api/user/user.module';
import { Module } from '@nestjs/common';
import { GamesModule } from '../../casino/games/games.module';
import { DepositStrategyModule } from './transactions/strategies/deposit/deposit.module';
import { RollbackStrategy } from './transactions/strategies/rollback.strategy';
import { WithdrawalStrategyModule } from './transactions/strategies/withdrawal/withdrawal.module';
import { TransactionStrategyFactory } from './transactions/transactions.factory';
import { SportsbookTransactionService } from './transactions/transactions.service';

@Module({
  imports: [
    BetModule,
    GamesModule,
    AccountingModule,
    UserModule,
    GatewayApiModule,
    WithdrawalStrategyModule,
    DepositStrategyModule,
  ],
  providers: [
    RollbackStrategy,
    TransactionStrategyFactory,
    SportsbookTransactionService,    
  ],
  exports: [SportsbookTransactionService],
})
export class SportsbookActionModule {}
