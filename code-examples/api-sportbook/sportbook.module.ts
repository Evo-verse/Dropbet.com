import { AccountingModule } from '@api/accounting/accounting.module';
import { Module } from '@nestjs/common';
import { SportsbookActionModule } from './actions/actions.module';
import { SportbookAuthModule } from './auth/sportbook-auth.module';
import { SportbookController } from './sportbook.controller';
import { SportbookService } from './sportbook.service';
import { SportsbookHeaderGuard } from './system/guards/header.guard';

@Module({
  imports: [SportbookAuthModule, SportsbookActionModule, AccountingModule],
  controllers: [SportbookController],
  providers: [SportbookService, SportsbookHeaderGuard],
})
export class SportbookModule {}
