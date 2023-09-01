// import { UpdateCateoryDTO } from 'src/infra/http/dtos/updateCategoryDTO';

import { Task } from '../entities/Task';

export abstract class TaskRepository {
  abstract create(task: Task): Promise<void>;
  abstract getTasks(): Promise<Task[]>;
  abstract update(id: string, data: Task): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
