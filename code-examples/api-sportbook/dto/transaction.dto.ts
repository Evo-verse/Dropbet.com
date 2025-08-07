import { UserBalanceDto } from '@api/accounting/dto/user-balance.dto';
import { CurrencySymbol } from '@prisma/client';
import { Type } from 'class-transformer';
import {
  IsDate,
  IsEnum,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { SportsbookCurrencies } from '../system/types/balances.type';
import {
  SportsbookContextReasonEnum,
  TransactionSportbookType,
} from '../system/types/transaction.type';
import { BalanceAmountDto, UserSportsBookDeposit } from './balance.dto';

export class TransactionContext {
  @IsOptional()
  bet?: unknown;

  @IsOptional()
  product: string;

  @IsOptional()
  reason: SportsbookContextReasonEnum;

  @IsString()
  correlationId: string;

  @IsString()
  betId: string;

  @IsOptional()
  SportBonusOfferId?: string;

  @IsOptional()
  SportBonusPlayerOfferId?: string;

  @IsOptional()
  betAmount: number | string;

  @IsOptional()
  tax: number | string;

  @IsOptional()
  taxChanges: number | string;

  @IsOptional()
  parentId?: string;
}

export class TransactionRequestDto {
  @IsString()
  id: string;

  @IsEnum(SportsbookCurrencies)
  currency: CurrencySymbol;

  @IsString()
  platform: string;

  @IsEnum(TransactionSportbookType)
  type: TransactionSportbookType;

  @IsDate()
  @Type(() => Date)
  initiatedAt: Date;

  @IsDate()
  @Type(() => Date)
  createdAt: Date;

  @ValidateNested()
  @Type(() => TransactionContext)
  context: TransactionContext;

  @ValidateNested()
  @Type(() => BalanceAmountDto)
  amountBreakdown: BalanceAmountDto;
}

export class TransactionResponseDto extends TransactionRequestDto {
  balances: UserSportsBookDeposit;
  status: boolean = true;
  alreadyProcessed: boolean = false;

  constructor(
    req: TransactionRequestDto,
    balance: UserBalanceDto,
    alreadyProcessed: boolean,
  ) {
    super();
    req.currency = SportsbookCurrencies.USD as unknown as CurrencySymbol;
    Object.assign(this, req);
    this.balances = new UserSportsBookDeposit(balance);
    this.alreadyProcessed = alreadyProcessed;
  }
}
