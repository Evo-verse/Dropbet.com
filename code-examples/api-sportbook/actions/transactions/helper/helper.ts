import { TransactionSportbookType } from '@api/sportbook/system/types/transaction.type';
import { ApiCode } from '@app/shared/api/exceptions/code';
import {
  SportsbookErrors,
  SportsbookException,
} from '@app/shared/api/exceptions/sportbook.exception';
import { HttpException } from '@nestjs/common';
import { CurrencySymbol, TransactionType } from '@prisma/client';
import { isString } from 'class-validator';

export function sportsbookTransactionTypesAdapter(
  transactionType: TransactionType,
): TransactionSportbookType {
  const sportsbookType: Record<string, TransactionSportbookType> = {
    [TransactionType.DEPOSIT]: TransactionSportbookType.deposit,
    [TransactionType.WITHDRAW]: TransactionSportbookType.withdrawal,
    default: TransactionSportbookType.withdrawal,
  };
  return sportsbookType[transactionType] || sportsbookType.default;
}

export function ebitTransactionTypesAdapter(
  transactionType: TransactionSportbookType,
): TransactionType {
  const sportsbookType: Record<string, TransactionType> = {
    [TransactionSportbookType.deposit]: TransactionType.DEPOSIT,
    [TransactionSportbookType.withdrawal]: TransactionType.WITHDRAW,
    default: TransactionType.WITHDRAW,
  };
  return sportsbookType[transactionType] || sportsbookType.default;
}

export const ADAPTED_EVO_EXCEPTION = (code: string): never => {
  switch (code) {
    case ApiCode.ACCOUNTING_BALANCE_INSUFFICIENT.code:
      throw new SportsbookException(SportsbookErrors.decline_lowbalance);
    case ApiCode.ACCOUNTING_TRANSACTION_ALREADY_EXISTS.code:
      throw new SportsbookException(
        SportsbookErrors.invalid_request,
        ApiCode.ACCOUNTING_TRANSACTION_ALREADY_EXISTS.message,
      );
    case ApiCode.USER_NOT_FOUND.code:
      throw new SportsbookException(SportsbookErrors.user_not_found);
    case ApiCode.BET_IS_NOT_FOUND.code:
    case ApiCode.BET_NOT_FOUND.code:
    case ApiCode.BET_ALREADY_EXISTS.code:
      throw new SportsbookException(SportsbookErrors.general_error);
    case ApiCode.BET_GR8_NOT_FOUND.code:
      throw new SportsbookException(SportsbookErrors.transaction_not_found);
    case ApiCode.BET_RESETTLE_ERROR.code:
      throw new SportsbookException(SportsbookErrors.decline_balance_conflict);
    default:
      throw new SportsbookException(SportsbookErrors.general_error);
  }
};

export function SportsbookExceptionAdapter(e: HttpException): never {
  if (e instanceof HttpException) {
    const error = e.getResponse() as { message: string; code: string };
    ADAPTED_EVO_EXCEPTION(error.code);
  }
  throw new SportsbookException(SportsbookErrors.general_error);
}

export function SportsbookUserIdAdapted(userId: string): string {
  if (!isString(userId)) {
    throw new SportsbookException(SportsbookErrors.general_error);
  }

  const splitId = userId.split('-');

  if (splitId.length > 1) {
    // EVO_1
    return splitId[1]; // 1
  }
  return `${CurrencySymbol.DBC}-${userId}`; // EVO_1
}
