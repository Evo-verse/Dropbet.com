import { SportsbookErrors, SportsbookException } from '@app/shared/api/exceptions/sportbook.exception';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SportsbookIpGuard implements CanActivate {
  private static readonly GR8_VPN_IPS = new Set<string>([
    'private',
    'private_1',
  ]);

  private static readonly GR8_PRODUCTION_IPS = new Set<string>([
    'private',
    'private_1',
  ]);

  private static readonly ALLOWED_IPS = new Set<string>([
    ...Array.from(SportsbookIpGuard.GR8_VPN_IPS),
    ...Array.from(SportsbookIpGuard.GR8_PRODUCTION_IPS),
  ]);

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const clientIp = request?.meta?.ip;
    if (!clientIp) {
      throw new SportsbookException(SportsbookErrors.invalid_request, 'Client passed invalid request parameters');
    }
    if (!this.isIpAllowed(clientIp)) {
      throw new SportsbookException(SportsbookErrors.invalid_request, 'Client passed invalid request parameters');
    }
    return true;
  }

  private isIpAllowed(ip: string): boolean {
    return SportsbookIpGuard.ALLOWED_IPS.has(ip);
  }
}
