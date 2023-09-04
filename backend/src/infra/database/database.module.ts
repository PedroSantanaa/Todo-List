import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { PrismaUserRepository } from './prisma/repositories/PrismaUserRepository';
import { CategoryRepository } from 'src/domain/repositories/CategoryRepository';
import { PrismaCategoryRepository } from './prisma/repositories/PrismaCategoryRepository';
import { TaskRepository } from 'src/domain/repositories/TaskRepository';
import { PrismaTaskRepository } from './prisma/repositories/PrismaTaskRepository';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [
    JwtService,
    PrismaService,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
    {
      provide: CategoryRepository,
      useClass: PrismaCategoryRepository,
    },
    {
      provide: TaskRepository,
      useClass: PrismaTaskRepository,
    },
  ],
  exports: [UserRepository, CategoryRepository, TaskRepository],
})
export class DatabaseModule {}
