import { TransactionDto } from '@api/accounting/dto/transaction.dto';
import { TransactionService } from '@api/accounting/services/transaction.service';
import { UserBalanceService } from '@api/accounting/services/user-balance.service';
import { BetCrudService } from '@api/bet/bet-crud.service';
import {
  TransactionContext,
  TransactionRequestDto,
  TransactionResponseDto,
} from '@api/sportbook/dto/transaction.dto';
import { SPORTSBOOK_GAME_SLUG } from '@api/sportbook/system/constants/sportsbook.constants';
import {
  SportsbookContextReasonEnum,
  TransactionSportbookType,
} from '@api/sportbook/system/types/transaction.type';
import { UserService } from '@api/user/user.service';
import { ApiCode } from '@app/shared/api/exceptions/code';
import { ApiException } from '@app/shared/api/exceptions/http';
import {
  SportsbookErrors,
  SportsbookException,
} from '@app/shared/api/exceptions/sportbook.exception';
import { EvoLogger } from '@bebkovan/server-core';
import { Injectable } from '@nestjs/common';
import { TransactionParams } from '../../dto/balance.dto';
import {
  ebitTransactionTypesAdapter,
  SportsbookExceptionAdapter,
  sportsbookTransactionTypesAdapter,
} from './helper/helper';
import { TransactionStrategyFactory } from './transactions.factory';

@Injectable()
export class SportsbookTransactionService {
  constructor(
    private readonly betCrudService: BetCrudService,
    private readonly transactionFactory: TransactionStrategyFactory,
    private readonly userBalanceService: UserBalanceService,
    private readonly userService: UserService,
    private readonly transactionService: TransactionService,
  ) {}

  public async executeStrategy(userId: number, payload: TransactionRequestDto) {
    if (isNaN(userId)) {
      throw new SportsbookException(SportsbookErrors.user_not_found);
    }
    const check_user = await this.userService.checkUserExist(userId);
    if (!check_user) {
      throw new SportsbookException(SportsbookErrors.user_not_found);
    }

    const strategy = this.transactionFactory.getStrategy(payload.type);

    try {
      return await strategy.execute(userId, payload);
    } catch (e) {
      EvoLogger.error(
        SportsbookTransactionService,
        `Strategy execution error`,
        e,
      );
      if (e instanceof SportsbookException) {
        throw e;
      }
      if (e instanceof ApiException) {
        const _error = e.getResponse();
        if (
          _error.code === ApiCode.ACCOUNTING_TRANSACTION_ALREADY_EXISTS.code
        ) {
          return await this.getTransaction(
            {
              transactionId: payload.id,
              userId: String(userId),
              incomingType: payload.type,
              betId: payload.context.betId,
            },
            payload.context,
          );
        }
      }
      return SportsbookExceptionAdapter(e);
    }
  }

  public async getTransaction(
    params: TransactionParams,
    incomingContext?: TransactionContext,
  ): Promise<TransactionResponseDto> {
    const { transactionId, userId } = params;

    if (isNaN(+userId)) {
      throw new SportsbookException(SportsbookErrors.user_not_found);
    }

    const checkUser = await this.userService.checkUserExist(+userId);
    if (!checkUser) {
      throw new SportsbookException(SportsbookErrors.user_not_found);
    }

    const existingTransaction = await this.findTransaction(params);

    if (!existingTransaction?.roundId) {
      throw new SportsbookException(SportsbookErrors.transaction_not_found);
    }

    if (
      params.incomingType &&
      ebitTransactionTypesAdapter(params.incomingType) !==
        existingTransaction.type
    ) {
      throw new SportsbookException(SportsbookErrors.error_retry_incorrect);
    }

    const bet = await this.betCrudService.findBetWithBetIdAndUserId(
      existingTransaction.roundId,
      +userId,
    );

    if (!bet) {
      throw new SportsbookException(SportsbookErrors.transaction_not_found);
    }

    const balance = await this.userBalanceService.findOne(
      +userId,
      bet.currencyId,
    );

    const transaction = new TransactionRequestDto();
    transaction.amountBreakdown = {
      cash: 0,
      bonus: '0',
      locked: '0',
    };

    if (existingTransaction.beforeBalance && existingTransaction.afterBalance) {
      const cash = existingTransaction.beforeBalance
        .minus(existingTransaction.afterBalance)
        .abs();
      transaction.amountBreakdown.cash = cash.toString();
    }

    const context: TransactionContext = incomingContext ||
      (existingTransaction.payload as TransactionContext) || {
        product: SPORTSBOOK_GAME_SLUG,
        reason: SportsbookContextReasonEnum.bet,
        correlationId: bet.id,
        betId: bet.id,
        betAmount: String(bet.amount),
        tax: 0.0,
        taxChanges: 0.0,
      };

    transaction.context = context;
    transaction.id = params.betId ? params.transactionId : transactionId;
    transaction.createdAt = bet.createdAt;
    transaction.initiatedAt = bet.createdAt;
    transaction.currency = bet.currencyId;
    transaction.platform = 'sport';
    transaction.type =
      params.incomingType === TransactionSportbookType.rollback
        ? TransactionSportbookType.rollback
        : sportsbookTransactionTypesAdapter(existingTransaction.type);

    return new TransactionResponseDto(transaction, balance, true);
  }

  private async findTransaction(
    params: TransactionParams,
  ): Promise<TransactionDto | null> {
    if (
      !params.incomingType ||
      params.incomingType !== TransactionSportbookType.rollback
    ) {
      return await this.transactionService.findTransaction(
        params.transactionId,
      );
    }
    if (!params.betId) {
      return null;
    }
    return await this.transactionService.findFirstTransactionsByRoundId(
      params.betId,
    );
  }
}
