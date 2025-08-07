import { BetCrudService } from '@api/bet/bet-crud.service';
import { BetAdditionalData } from '@api/bet/bet.model';
import { BetService } from '@api/bet/bet.service';
import { BetHelper } from '@api/bet/utils/bet-helper.utils';
import { GamesService } from '@api/casino/games/service/games.service';
import {
  TransactionRequestDto,
  TransactionResponseDto,
} from '@api/sportbook/dto/transaction.dto';
import { SPORTSBOOK_GAME_SLUG } from '@api/sportbook/system/constants/sportsbook.constants';
import { ApiCode } from '@app/shared/api/exceptions/code';
import { ApiException } from '@app/shared/api/exceptions/http';
import { Injectable } from '@nestjs/common';
import { BetStatus } from '@prisma/client';
import { ITransactionStrategy } from '../interfaces/strategy.interface';

@Injectable()
export class RollbackStrategy implements ITransactionStrategy {
  constructor(
    private readonly betService: BetService,
    private readonly betCrudService: BetCrudService,
    private readonly gameService: GamesService,
  ) {}

  async execute(
    userId: number,
    data: TransactionRequestDto,
  ): Promise<TransactionResponseDto> {
    const game = await this.gameService.getGameBySlug(SPORTSBOOK_GAME_SLUG);
    const betIdentity = BetHelper.getSportsbookIdentity(
      {
        userId: userId,
        gameId: game.id,
        currencyId: data.currency,
        betId: data.context.betId,
      },
      data.context.betId,
    );

    const checkBet = await this.betCrudService.findUniqueBet(
      data.context.betId,
    );

    if (!checkBet) {
      throw new ApiException(ApiCode.BET_GR8_NOT_FOUND);
    }

    if (checkBet && checkBet.status === BetStatus.ROLLBACK) {
      throw new ApiException(ApiCode.ACCOUNTING_TRANSACTION_ALREADY_EXISTS);
    }

    const bet = await this.betService.rollbackBet(betIdentity, {
      roundTransactions: [],
      payload: data.context as unknown as BetAdditionalData,
    });

    return new TransactionResponseDto(data, bet.balance, false);
  }
}
