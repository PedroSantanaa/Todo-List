import { IsString, IsUUID } from 'class-validator';

export class GetTasksDTO {
  @IsString()
  title: string;

  @IsUUID()
  categoryId: string;
}
