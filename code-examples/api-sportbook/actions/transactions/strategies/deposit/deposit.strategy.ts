import { BetHelper } from '@api/bet/utils/bet-helper.utils';
import { GamesService } from '@api/casino/games/service/games.service';
import {
  TransactionRequestDto,
  TransactionResponseDto,
} from '@api/sportbook/dto/transaction.dto';
import { SPORTSBOOK_GAME_SLUG } from '@api/sportbook/system/constants/sportsbook.constants';
import { Injectable } from '@nestjs/common';
import { ITransactionStrategy } from '../../interfaces/strategy.interface';
import { DepositStrategyFactory } from './deposit.factory';

@Injectable()
export class DepositStrategy implements ITransactionStrategy {
  constructor(
    private readonly gameService: GamesService,
    private readonly depositStrategyFactory: DepositStrategyFactory,
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

    const strategy = this.depositStrategyFactory.getStrategy(
      data.context.reason,
    );
    const bet = await strategy.execute(betIdentity, data);

    return new TransactionResponseDto(data, bet.balance, false);
  }
}
