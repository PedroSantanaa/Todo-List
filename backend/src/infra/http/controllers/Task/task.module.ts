import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { TaskController } from './task.controller';
import { CreateTaskCase } from 'src/application/use-cases/task/create-task-case';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [CreateTaskCase],
})
export class TaskModule {}
