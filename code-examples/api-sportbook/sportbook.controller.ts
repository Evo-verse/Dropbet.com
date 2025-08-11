import { Evo } from '@app/shared/api';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CurrencySymbol } from '@prisma/client';
import {
  BalanceQuery,
  IdentityParam,
  TransactionParams,
} from './dto/balance.dto';
import { TransactionRequestDto } from './dto/transaction.dto';
import { SportbookService } from './sportbook.service';
import { SportsbookDtoFilter } from './system/filters/sportsbook_dto.filter';
import { SportsbookHeaderGuard } from './system/guards/header.guard';
import { SportsbookIpGuard } from './system/guards/ip.guard';

@ApiTags('Sportsbook external GR8')
@Evo.ValidateDto(false)
@Controller('sportsbook/integration')
@UseGuards(SportsbookIpGuard, SportsbookHeaderGuard)
@UseFilters(SportsbookDtoFilter)
export class SportbookController {
  constructor(private readonly sportbookService: SportbookService) {}

  @ApiOperation({ summary: 'Only for GR8.' })
  @Get(':userId/transactions/:transactionId')
  async getTransactionById(@Param() params: TransactionParams) {
    return await this.sportbookService.getTransaction(params);
  }

  @ApiOperation({ summary: 'Only for GR8.' })
  @Post(':userId/transactions')
  async performTransaction(
    @Param() param: IdentityParam,
    @Body() body: TransactionRequestDto,
  ) {
    body.currency = CurrencySymbol.DBC;

    return await this.sportbookService.sportsbookTransactions(
      +param.userId,
      body,
    );
  }

  @ApiOperation({ summary: 'Only for GR8.' })
  @Get(':userId/balance')
  async getUserBalance(
    @Param() param: IdentityParam,
    @Query() payload: BalanceQuery,
  ) {
    return await this.sportbookService.getSportsbookBalances(
      +param.userId,
      payload.currencies,
    );
  }
}
