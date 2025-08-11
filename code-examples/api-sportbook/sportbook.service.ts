import { UserBalanceService } from '@api/accounting/services/user-balance.service';
import { ApiCode } from '@app/shared/api/exceptions/code';
import { ApiException } from '@app/shared/api/exceptions/http';
import { EvoLogger } from '@bebkovan/server-core';
import { Injectable } from '@nestjs/common';
import { CurrencySymbol } from '@prisma/client';
import { SportsbookExceptionAdapter } from './actions/transactions/helper/helper';
import { SportsbookTransactionService } from './actions/transactions/transactions.service';
import { TransactionParams, UserSportsBookDeposit } from './dto/balance.dto';
import { TransactionRequestDto } from './dto/transaction.dto';

@Injectable()
export class SportbookService {
  constructor(
    private readonly userBalanceService: UserBalanceService,
    private readonly transactionService: SportsbookTransactionService,
  ) {}

  async getSportsbookBalances(
    userId: number,
    currencyId: CurrencySymbol = CurrencySymbol.DBC,
  ): Promise<UserSportsBookDeposit> {
    try {
      if (isNaN(userId)) {
        throw new ApiException(ApiCode.USER_NOT_FOUND);
      }
      const data = await this.userBalanceService.findOne(
        userId,
        currencyId,
        true,
      );
      return new UserSportsBookDeposit(data);
    } catch (error) {
      EvoLogger.error(
        SportbookService,
        `Failed to retrieve sportsbook balances`,
        error,
      );
      return SportsbookExceptionAdapter(error);
    }
  }

  async sportsbookTransactions(userId: number, payload: TransactionRequestDto) {
    return this.transactionService.executeStrategy(userId, payload);
  }

  async getTransaction(params: TransactionParams) {
    return await this.transactionService.getTransaction(params);
  }
}
