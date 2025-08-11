import { CurrencySymbolFiat } from '@app/accounting';
import { IsString } from 'class-validator';

export class SportsbookAuthTokenDto {
  @IsString()
  token: string;
  constructor(token: string) {
    this.token = token;
  }
}

export class SportsbookTokenPayloadDto {
  defaultCurrency: CurrencySymbolFiat;
  externalUserId: string;
}
