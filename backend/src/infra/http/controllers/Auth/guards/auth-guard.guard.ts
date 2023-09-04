import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { PrismaUserRepository } from 'src/infra/database/prisma/repositories/PrismaUserRepository';

export class AuthGuard implements CanActivate {
  constructor(private readonly prismaUserRepository: PrismaUserRepository) {}
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;
    const token = (authorization ?? '').split(' ')[1];
    return this.prismaUserRepository.isValidToken(token);
  }
}
