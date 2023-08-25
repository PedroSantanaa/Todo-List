import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { UserController } from './user.controller';
import { UpdateUserCase } from 'src/application/use-cases/user/update-user-case';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UpdateUserCase],
})
export class UserModule {}
