import { CategoryNameDTO } from 'src/infra/http/dtos/categoryNameDTO';
import { Category } from '../entities/Category';
// import { UpdateCateoryDTO } from 'src/infra/http/dtos/updateCategoryDTO';

export abstract class CategoryRepository {
  abstract create(category: Category): Promise<void>;
  abstract getCategoriesName(): Promise<CategoryNameDTO[]>;
  // abstract update(id: string, data: UpdateCateoryDTO): Promise<void>;
  abstract delete(id: string): Promise<void>;
}
