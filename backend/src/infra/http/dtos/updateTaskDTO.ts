import { CreateTaskDTO } from './createTaskDTO';
import { PartialType } from '@nestjs/swagger';

export class UpdateTaskDTO extends PartialType(CreateTaskDTO) {
  updatedAt?: Date;
}
