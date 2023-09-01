import { UpdateTaskDTO } from 'src/infra/http/dtos/updateTaskDTO';
import { Task } from '../entities/Task';
import { GetTasksDTO } from 'src/infra/http/dtos/getTasksDTO';

export abstract class TaskRepository {
  abstract create(task: Task): Promise<void>;
  abstract getTasks(id: string): Promise<GetTasksDTO[]>;
  abstract update(id: string, data: UpdateTaskDTO): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
