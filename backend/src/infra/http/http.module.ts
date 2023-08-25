import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/Auth/auth.module';
import { UserModule } from './controllers/User/user.module';

@Module({
  imports: [AuthModule, UserModule],
})
export class HttpModule {}
