import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SportbookS2sService } from './sportbook-s2s.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [SportbookS2sService],
  exports: [SportbookS2sService]
})
export class SportbookS2SModule {}
