import { IsString, IsUUID } from 'class-validator';

export class CategoryNameDTO {
  @IsUUID()
  id: string;
  @IsString()
  name: string;
}
