import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/domain/repositories/CategoryRepository';
import { CategoryNameDTO } from 'src/infra/http/dtos/categoryNameDTO';

interface GetCategoriesNameResponse {
  categoriesObj: CategoryNameDTO[];
}

@Injectable()
export class GetCategoriesNameCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(): Promise<GetCategoriesNameResponse> {
    const categories = await this.categoryRepository.getCategoriesName();
    const categoriesObj: CategoryNameDTO[] = categories.map((category) => ({
      name: category.name,
    }));
    return { categoriesObj };
  }
}
