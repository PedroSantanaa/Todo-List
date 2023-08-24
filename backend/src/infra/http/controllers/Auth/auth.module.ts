import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { AuthController } from './auth.controller';
import { CreateUserCase } from 'src/application/use-cases/auth/create-user-case';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthController],
  providers: [CreateUserCase],
})
export class AuthModule {}
