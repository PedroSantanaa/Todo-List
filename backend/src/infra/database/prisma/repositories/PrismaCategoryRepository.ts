import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import { CategoryRepository } from 'src/domain/repositories/CategoryRepository';
import { Category } from 'src/domain/entities/Category';
import { CategoryNameDTO } from 'src/infra/http/dtos/categoryNameDTO';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}
  async getCategoriesName(): Promise<CategoryNameDTO[]> {
    const categories = await this.prisma.category.findMany();
    const categoriesName: CategoryNameDTO[] = categories.map((category) => ({
      id: category.id,
      name: category.name,
    }));
    return categoriesName;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.task.deleteMany({
      where: {
        categoryId: id,
      },
    });
    await this.prisma.category.delete({
      where: {
        id,
      },
    });
  }
  async create(category: Category): Promise<void> {
    const { id, name, task, createdAt, updatedAt } = category;

    try {
      await this.prisma.category.create({
        data: {
          id,
          name,
          task: {
            create: task,
          },
          createdAt,
          updatedAt,
        },
      });
    } catch (err) {
      throw new ForbiddenException('Category already exists');
    }
  }
  async update(id: string, data: UpdateUserDTO): Promise<void> {
    data.updatedAt = new Date();
    await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
}
