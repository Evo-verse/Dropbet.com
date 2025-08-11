import { UserBalanceDto } from '@api/accounting/dto/user-balance.dto';
import { CurrencySymbolFiat } from '@app/accounting';
import { CurrencySymbol } from '@prisma/client';
import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator';
import { SportsbookUserIdAdapted } from '../actions/transactions/helper/helper';
import {
  Balance,
  BalanceAmount,
  SportsbookBalances,
} from '../system/types/balances.type';
import { TransactionSportbookType } from '../system/types/transaction.type';

export class BalanceQuery {
  @IsOptional()
  @IsEnum(CurrencySymbol)
  currencies?: CurrencySymbol;
}

export class IdentityParam {
  @IsString()
  @Transform(({ value }) => SportsbookUserIdAdapted(value))
  userId: string;
}

export class TransactionParams extends IdentityParam {
  @IsString()
  transactionId: string;
  incomingType?: TransactionSportbookType;
  betId?: string;
}

export class UserSportsBookDeposit {
  sport: SportsbookBalances;

  constructor(data: UserBalanceDto[] | UserBalanceDto) {
    const balances: Balance = {} as Balance;

    const processBalance = (balance: UserBalanceDto) => {
      balances[CurrencySymbolFiat.USD] = {
        cash: String(balance.amount),
        bonus: '0',
        locked: '0',
      };
    };

    if (Array.isArray(data)) {
      data.forEach(processBalance);
    } else {
      processBalance(data);
    }

    this.sport = { sportsbook: balances };
  }
}

export class BalanceAmountDto implements BalanceAmount {
  @IsNotEmpty()
  @Transform(({ value }) => String(value))
  cash: number | string;
  
  @IsOptional()
  @Transform(({ value }) => String(value))
  bonus: number | string;
  
  @IsOptional()
  @Transform(({ value }) => String(value))
  locked: number | string;
}
