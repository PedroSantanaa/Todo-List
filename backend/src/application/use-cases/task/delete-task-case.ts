import { Injectable } from '@nestjs/common';
import { TaskRepository } from 'src/domain/repositories/TaskRepository';

@Injectable()
export class DeleteTaskCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(id: string): Promise<void> {
    await this.taskRepository.delete(id);
  }
}
