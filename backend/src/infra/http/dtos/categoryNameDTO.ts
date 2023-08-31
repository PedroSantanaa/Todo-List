import { IsString } from 'class-validator';

export class CategoryNameDTO {
  @IsString()
  name: string;
}
