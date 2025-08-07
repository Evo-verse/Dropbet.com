import { ConfigService } from '@app/shared/env-config/env-config.service';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { SportbookAuthController } from './sportbook-auth.controller';
import { SportbookAuthService } from './sportbook-auth.service';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        privateKey: configService.get('SPORTSBOOK_JWT_PRIVATE_KEY'),
        publicKey: configService.get('SPORTSBOOK_JWT_PUBLIC_KEY'),
        signOptions: {
          algorithm: 'RS256',
        },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [SportbookAuthController],
  providers: [SportbookAuthService],
})
export class SportbookAuthModule {}
