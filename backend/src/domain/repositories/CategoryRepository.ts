import { Category } from '../entities/Category';
import { UpdateCateoryDTO } from 'src/infra/http/dtos/updateCategoryDTO';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract findAll(): Promise<Category[]>;
  abstract update(id: string, data: UpdateCateoryDTO): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
