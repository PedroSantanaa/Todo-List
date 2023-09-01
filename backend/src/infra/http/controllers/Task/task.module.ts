import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { TaskController } from './task.controller';
import { CreateTaskCase } from 'src/application/use-cases/task/create-task-case';
import { DeleteTaskCase } from 'src/application/use-cases/task/delete-task-case';
import { UpdateTaskCase } from 'src/application/use-cases/task/update-task-case';
import { GetTasksCase } from 'src/application/use-cases/task/get-tasks-case';

@Module({
  imports: [DatabaseModule],
  controllers: [TaskController],
  providers: [CreateTaskCase, DeleteTaskCase, UpdateTaskCase, GetTasksCase],
})
export class TaskModule {}
