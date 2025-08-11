import { CurrencySymbolFiat } from '@app/accounting';

export interface BalanceAmount {
  cash: number | string;
  bonus: number | string;
  locked: number | string;
}

export enum SportsbookCurrencies {
  'USD' = CurrencySymbolFiat.USD
}

export type Balance = {
  [key in SportsbookCurrencies]: BalanceAmount;
};

export type SportsbookBalances = {
  sportsbook: Balance;
};
