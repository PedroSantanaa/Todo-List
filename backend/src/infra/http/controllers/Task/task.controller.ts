import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTaskCase } from 'src/application/use-cases/task/create-task-case';
import { CreateTaskDTO } from '../../dtos/createTaskDTO';
import { DeleteTaskCase } from 'src/application/use-cases/task/delete-task-case';
import { UpdateTaskDTO } from '../../dtos/updateTaskDTO';
import { UpdateTaskCase } from 'src/application/use-cases/task/update-task-case';
import { GetTasksCase } from 'src/application/use-cases/task/get-tasks-case';
// import { AuthGuard } from '../Auth/guards/auth-guard.guard';

// @UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
  constructor(
    private readonly createTaskCase: CreateTaskCase,
    private readonly deleteTaskCase: DeleteTaskCase,
    private readonly updateTaskCase: UpdateTaskCase,
    private readonly getTasksCase: GetTasksCase,
  ) {}
  @Get(':uuid')
  async get(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    const { task } = await this.getTasksCase.execute(uuid);
    return task;
  }

  @Post('')
  async create(@Body() body: CreateTaskDTO) {
    const { title, userId, categoryId } = body;
    const { task } = await this.createTaskCase.execute({
      title,
      userId,
      categoryId,
    });
    return task;
  }

  @Delete(':uuid')
  async delete(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    await this.deleteTaskCase.execute(uuid);
    return { message: 'Task deleted successfully' };
  }

  @Patch(':uuid')
  async update(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
    @Body() body: UpdateTaskDTO,
  ) {
    await this.updateTaskCase.execute(uuid, body);
    return { message: 'Task updated successfully' };
  }
}
