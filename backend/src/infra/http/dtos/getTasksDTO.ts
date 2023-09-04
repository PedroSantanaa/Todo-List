import { IsString, IsUUID } from 'class-validator';

export class GetTasksDTO {
  @IsUUID()
  id: string;
  @IsString()
  title: string;

  @IsUUID()
  categoryId: string;
}
