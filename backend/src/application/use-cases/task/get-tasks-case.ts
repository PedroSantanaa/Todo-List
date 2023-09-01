import { Injectable } from '@nestjs/common';
import { TaskRepository } from 'src/domain/repositories/TaskRepository';
import { GetTasksDTO } from 'src/infra/http/dtos/getTasksDTO';

interface GetTasksResponse {
  task: GetTasksDTO[];
}

@Injectable()
export class GetTasksCase {
  constructor(private readonly taskRepository: TaskRepository) {}

  async execute(uuid: string): Promise<GetTasksResponse> {
    const tasks = await this.taskRepository.getTasks(uuid);
    const task: GetTasksDTO[] = tasks.map((task) => ({
      title: task.title,
      categoryId: task.categoryId,
    }));
    return { task };
  }
}
