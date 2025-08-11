import { SportsbookErrors, SportsbookException } from '@app/shared/api/exceptions/sportbook.exception';
import { ConfigService } from '@app/shared/env-config/env-config.service';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SportsbookHeaderGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const headers = request.headers;

    const x_band = headers['x-brand'];
    const x_operator_id = headers['x-operator-id'];

    return this.validate_sportsbook_headers(x_band, x_operator_id);
  }

  private validate_sportsbook_headers(
    bandHeader: string,
    operatorHeader: string,
  ) {
    if (!bandHeader || !operatorHeader) {
      throw new SportsbookException(SportsbookErrors.invalid_request, 'Client passed invalid request parameters');
    }

    const bandConfig = this.config.get('SPORTSBOOK_X_BRAND');
    const operatorConfig = this.config.get('SPORTSBOOK_X_OPERATOR_ID');

    const configuredValue = `${bandConfig}${operatorConfig}`;
    const headerValue = `${bandHeader}${operatorHeader}`;

    if (configuredValue !== headerValue) {
      throw new SportsbookException(SportsbookErrors.invalid_request, 'Client passed invalid request parameters');
    }
    return true;
  }
}
