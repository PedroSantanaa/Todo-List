import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CategoryController } from './category.controller';
import { CreateCategoryCase } from 'src/application/use-cases/category/create-category-case';
import { GetCategoriesNameCase } from 'src/application/use-cases/category/get-categories-name-case';
import { DeleteCategoryCase } from 'src/application/use-cases/category/delete-category-case';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CreateCategoryCase, GetCategoriesNameCase, DeleteCategoryCase],
})
export class CategoryModule {}
