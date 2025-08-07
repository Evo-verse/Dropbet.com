import { SportsbookErrors, SportsbookException } from '@app/shared/api/exceptions/sportbook.exception';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SportsbookIpGuard implements CanActivate {
  private static readonly GR8_VPN_IPS = new Set<string>([
    '66.159.223.53',
    '66.159.223.59',
    '208.127.12.158',
    '208.127.12.159',
    '208.127.105.155',
    '208.127.105.37',
    '130.41.59.141',
    '130.41.218.83',
    '130.41.34.134',
    '208.127.41.82',
    '130.41.235.243',
    '130.41.235.244',
    '130.41.188.74',
    '130.41.188.72',
    '128.77.3.181',
    '128.77.3.66',
    '165.85.185.236',
    '165.85.185.237',
  ]);

  private static readonly GR8_PRODUCTION_IPS = new Set<string>([
    '3.121.28.124',
    '3.121.38.70',
    '3.121.23.59',
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
