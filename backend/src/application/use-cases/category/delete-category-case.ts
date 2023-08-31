import { Injectable } from '@nestjs/common';
import { CategoryRepository } from 'src/domain/repositories/CategoryRepository';

@Injectable()
export class DeleteCategoryCase {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async execute(id: string): Promise<void> {
    await this.categoryRepository.delete(id);
  }
}
