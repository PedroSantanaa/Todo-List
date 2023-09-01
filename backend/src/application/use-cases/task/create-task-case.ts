import { Injectable } from '@nestjs/common';
import { Task } from 'src/domain/entities/Task';
import { TaskRepository } from 'src/domain/repositories/TaskRepository';

interface CreateTaskRequest {
  title: string;
  userId: string;
  categoryId: string;
}
interface CreateTaskResponse {
  task: Task;
}

@Injectable()
export class CreateTaskCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(request: CreateTaskRequest): Promise<CreateTaskResponse> {
    const { title, userId, categoryId } = request;
    const task = new Task({ title, userId, categoryId });

    await this.taskRepository.create(task);
    return {
      task,
    };
  }
}
