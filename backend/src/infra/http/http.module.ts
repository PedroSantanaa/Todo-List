import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/Auth/auth.module';

@Module({
  imports: [AuthModule],
})
export class HttpModule {}
