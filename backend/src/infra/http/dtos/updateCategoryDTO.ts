import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDTO } from './createCategoryDTO';

export class UpdateCateoryDTO extends PartialType(CreateCategoryDTO) {}
