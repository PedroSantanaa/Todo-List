import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/infra/database/database.module';
import { CategoryController } from './category.controller';
import { CreateCategoryCase } from 'src/application/use-cases/category/create-category-case';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoryController],
  providers: [CreateCategoryCase],
})
export class CategoryModule {}
