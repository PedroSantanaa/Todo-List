import { Injectable } from '@nestjs/common';
import { TaskRepository } from 'src/domain/repositories/TaskRepository';

interface UpdateTaskRequest {
  title?: string;
  categoryId?: string;
}

@Injectable()
export class UpdateTaskCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(id: string, request: UpdateTaskRequest): Promise<void> {
    await this.taskRepository.update(id, request);
  }
}
