import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { CategoryRepository } from 'src/domain/repositories/CategoryRepository';
import { PrismaCategoryRepository } from './prisma/repositories/PrismaCategoryRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
  ],
  exports: [UserRepository, CategoryRepository],
})
export class DatabaseModule {}
