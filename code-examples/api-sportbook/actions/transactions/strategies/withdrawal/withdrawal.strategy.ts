import { BetHelper } from '@api/bet/utils/bet-helper.utils';
import { GamesService } from '@api/casino/games/service/games.service';
import {
  TransactionRequestDto,
  TransactionResponseDto,
} from '@api/sportbook/dto/transaction.dto';
import { SPORTSBOOK_GAME_SLUG } from '@api/sportbook/system/constants/sportsbook.constants';
import { EventMessage } from '@app/gateway/dto/base.dto';
import { EventsGateway } from '@app/gateway/events.gateway';
import { GATEWAY_API_EVENTS } from '@app/shared/events/api.events';
import { Injectable } from '@nestjs/common';
import { ITransactionStrategy } from '../../interfaces/strategy.interface';
import { WithdrawalStrategyFactory } from './withdrawal.factory';

@Injectable()
export class WithdrawalStrategy implements ITransactionStrategy {
  constructor(
    private readonly gameService: GamesService,
    private readonly gateway: EventsGateway,
    private readonly withdrawalStrategyFactory: WithdrawalStrategyFactory,
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

    const withdrawStrategy = this.withdrawalStrategyFactory.getStrategy(
      data.context.reason,
    );
    const bet = await withdrawStrategy.execute(betIdentity, data);

    this.gateway.emitEvent(
      new EventMessage({
        event: GATEWAY_API_EVENTS.Server.BalanceUpdated,
        data: {
          amount: bet.balance.amount.toString(),
          currencyId: bet.balance.currencyId,
        },
        user: { id: userId },
      }),
    );
    return new TransactionResponseDto(data, bet.balance, false);
  }
}
