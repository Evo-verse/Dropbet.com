import { ApiCode } from '@app/shared/api/exceptions/code';
import { ApiException } from '@app/shared/api/exceptions/http';
import { ConfigService } from '@app/shared/env-config/env-config.service';
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Cacheable } from '@type-cacheable/core';
import { firstValueFrom, map } from 'rxjs';
import {
  SPORTSBOOK_S2S_GET_BET_EVENT_URL,
  SPORTSBOOK_S2S_GET_TOKEN_URL,
} from '../system/constants/sportsbook-s2s.constants';
import { SportsbookS2STokenResponseType } from '../system/types/s2s.type';

@Injectable()
export class SportbookS2sService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  public async getS2SGr8BetEvent(betId: string) {
    const url = `${SPORTSBOOK_S2S_GET_BET_EVENT_URL}/${betId}`;

    const gr8AuthToken = await this.getS2SGr8Token();

    const betRequest = this.httpService.get(url, {
      headers: {
        Authorization: gr8AuthToken.access_token,
        'X-Brand': this.configService.get('SPORTSBOOK_X_BRAND'),
        'X-Operator-Id': this.configService.get('SPORTSBOOK_X_OPERATOR_ID'),
      },
    });

    try {
      return await firstValueFrom(betRequest);
    } catch (e) {
      throw new ApiException(ApiCode.SPORTSBOOK_GENERATE_TOKEN_ERROR);
    }
  }

  @Cacheable({ cacheKey: 'gr8Token', ttlSeconds: 3600 })
  public async getS2SGr8Token(): Promise<SportsbookS2STokenResponseType> {
    const urlSearchParams = new URLSearchParams({
      client_id: this.configService.get('SPORTSBOOK_CLIENT_NAME'),
      client_secret: this.configService.get('SPORTSBOOK_CLIENT_SECRET'),
      grant_type: 'client_credentials',
    });

    const tokenRequest = this.httpService
      .post<SportsbookS2STokenResponseType>(SPORTSBOOK_S2S_GET_TOKEN_URL, urlSearchParams, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .pipe(
        map((res) => {
          return res.data;
        }),
      );

    try {
      return await firstValueFrom<SportsbookS2STokenResponseType>(tokenRequest);
    } catch (e) {
      throw new ApiException(ApiCode.SPORTSBOOK_GENERATE_TOKEN_ERROR);
    }
  }
}
