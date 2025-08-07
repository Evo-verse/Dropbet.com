import { JwtGuard } from '@api/auth/guards';
import { RequestExt } from '@api/types';
import { Evo } from '@app/shared/api';
import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SportsbookIpGuard } from '../system/guards/ip.guard';
import { SportsbookAuthTokenDto } from './dto/sportsbook-token.dto';
import { SportbookAuthService } from './sportbook-auth.service';

@ApiTags('Sportsbook exteranal GR8 ( auth )')
@Evo.ValidateDto(false)
@Controller('sportsbook/integration/auth')
export class SportbookAuthController {
  constructor(private readonly sportsbookAuthService: SportbookAuthService) {}

  @ApiOperation({ summary: 'Get JWT token for sportsbook IFrame.' })
  @UseGuards(JwtGuard)
  @Get('get-sportsbook-token')
  async getAuthToken(@Req() req: RequestExt): Promise<SportsbookAuthTokenDto> {
    return await this.sportsbookAuthService.generateSportsbookJWT(req.user);
  }

  @ApiOperation({ summary: 'Only for GR8. Cache - 15min' })
  @UseGuards(SportsbookIpGuard)
  @Get('get-sportsbook-public-key')
  async getPublicKey(): Promise<string> {
    return await this.sportsbookAuthService.getPublicKey();
  }
}
