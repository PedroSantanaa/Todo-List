import { Injectable } from '@nestjs/common';
import { Category } from 'src/domain/entities/Category';
import { CategoryRepository } from 'src/domain/repositories/CategoryRepository';

interface CreateCategoryRequest {
  name: string;
  tasks?: string[];
}
interface CreateCategoryResponse {
  category: Category;
}

@Injectable()
export class CreateCategoryCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(
    request: CreateCategoryRequest,
  ): Promise<CreateCategoryResponse> {
    const { name } = request;
    const category = new Category({ name });

    await this.categoryRepository.create(category);
    return {
      category,
    };
  }
}
