import { IsString, IsUUID } from 'class-validator';

export class CreateTaskDTO {
  @IsString()
  title: string;

  @IsUUID()
  userId: string;

  @IsUUID()
  categoryId: string;
}
