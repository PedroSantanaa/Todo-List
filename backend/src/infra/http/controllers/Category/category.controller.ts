import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { CreateCategoryCase } from 'src/application/use-cases/category/create-category-case';
import { CreateCategoryDTO } from '../../dtos/createCategoryDTO';
import { GetCategoriesNameCase } from 'src/application/use-cases/category/get-categories-name-case';
import { DeleteCategoryCase } from 'src/application/use-cases/category/delete-category-case';

@Controller('category')
export class CategoryController {
  constructor(
    private readonly createCategoryCase: CreateCategoryCase,
    private readonly getCategoriesNameCategory: GetCategoriesNameCase,
    private readonly deleteCategoryCase: DeleteCategoryCase,
  ) {}

  @Post('')
  async create(@Body() body: CreateCategoryDTO) {
    const { name } = body;
    const { category } = await this.createCategoryCase.execute({
      name,
    });
    return category;
  }
  @Get('')
  async getCategoriesName() {
    const { categoriesObj } = await this.getCategoriesNameCategory.execute();
    const categoriesName = categoriesObj.map((obj) => obj.name);
    return categoriesName;
  }
  @Delete(':uuid')
  async delete(@Param('uuid', new ParseUUIDPipe()) uuid: string) {
    await this.deleteCategoryCase.execute(uuid);
  }
}
