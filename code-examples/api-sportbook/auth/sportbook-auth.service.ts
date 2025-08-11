import { ACCESS_TOKEN_TTL_MS } from '@api/auth/dto';
import { SportsbookUserIdAdapted } from '@api/sportbook/actions/transactions/helper/helper';
import { UserDto } from '@api/user/dto/user.dto';
import { CurrencySymbolFiat } from '@app/accounting';
import { ApiCode } from '@app/shared/api/exceptions/code';
import { ApiException } from '@app/shared/api/exceptions/http';
import { ConfigService } from '@app/shared/env-config/env-config.service';
import { EvoLogger } from '@bebkovan/server-core';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {
  SportsbookAuthTokenDto,
  SportsbookTokenPayloadDto,
} from './dto/sportsbook-token.dto';

@Injectable()
export class SportbookAuthService {
  private readonly logger = EvoLogger.create(SportbookAuthService);

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  public async getPublicKey(): Promise<string> {
    return this.configService.get('SPORTSBOOK_JWT_PUBLIC_KEY');
  }

  public async generateSportsbookJWT(
    user: UserDto,
  ): Promise<SportsbookAuthTokenDto> {
    try {
      const exp = ACCESS_TOKEN_TTL_MS / 1000;

      const payload: SportsbookTokenPayloadDto = {
        defaultCurrency: CurrencySymbolFiat.USD,
        externalUserId: SportsbookUserIdAdapted(String(user.id)),
      };

      const token = await this.jwtService.signAsync(payload, {
        expiresIn: exp,
      });

      this.logger.log(
        `User started new Sportsbook session: ${user.id}`,
        payload,
      );

      return new SportsbookAuthTokenDto(token);
    } catch (error) {
      this.logger.error(
        `Failed to generate JWT for user ${user.id}: ${error.message}`,
      );
      throw new ApiException(ApiCode.SPORTSBOOK_GENERATE_TOKEN_ERROR);
    }
  }
}
