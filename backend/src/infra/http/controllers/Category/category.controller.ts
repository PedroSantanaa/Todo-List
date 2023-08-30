import { Body, Controller, Post } from '@nestjs/common';
import { CreateCategoryCase } from 'src/application/use-cases/category/create-category-case';
import { CreateCategoryDTO } from '../../dtos/createCategoryDTO';

@Controller('category')
export class CategoryController {
  constructor(private readonly createCategoryCase: CreateCategoryCase) {}

  @Post('')
  async create(@Body() body: CreateCategoryDTO) {
    const { name } = body;
    const { category } = await this.createCategoryCase.execute({
      name,
    });
    return category;
  }
}
