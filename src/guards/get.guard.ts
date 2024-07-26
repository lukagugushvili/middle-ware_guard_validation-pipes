import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class UseGuardForGetMethod implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const API_KEY = request.headers['api-key'];
    const predefinedApiKey = 'true';

    if (API_KEY && API_KEY === predefinedApiKey) {
      return true;
    } else {
      throw new ForbiddenException('Access denied: Invalid API key');
    }
  }
}
