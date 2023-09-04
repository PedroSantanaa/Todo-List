import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthController } from './auth.controller';
import { CreateUserCase } from 'src/application/use-cases/auth/create-user-case';
import { LoginUserCase } from 'src/application/use-cases/auth/login-user-case';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [CreateUserCase, LoginUserCase],
})
export class AuthModule {}
