import { Body, Controller, Post } from '@nestjs/common';
import { CreateTaskCase } from 'src/application/use-cases/task/create-task-case';

@Controller('task')
export class TaskController {
  constructor(private readonly createTaskCase: CreateTaskCase) {}

  @Post('')
  async create(@Body() body: any) {
    const { title, userId, categoryId } = body;
    const { task } = await this.createTaskCase.execute({
      title,
      userId,
      categoryId,
    });
    return task;
  }
}
