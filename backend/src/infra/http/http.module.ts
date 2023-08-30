import { Module } from '@nestjs/common';
import { AuthModule } from './controllers/Auth/auth.module';
import { UserModule } from './controllers/User/user.module';
import { CategoryModule } from './controllers/Category/category.module';

@Module({
  imports: [AuthModule, UserModule, CategoryModule],
})
export class HttpModule {}
