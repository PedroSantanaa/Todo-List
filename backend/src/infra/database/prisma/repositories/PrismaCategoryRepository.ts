import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import * as bcrypt from 'bcrypt';
import { CategoryRepository } from 'src/domain/repositories/CategoryRepository';
import { Category } from 'src/domain/entities/Category';

@Injectable()
export class PrismaCategoryRepository implements CategoryRepository {
  constructor(private readonly prisma: PrismaService) {}
  findAll(): Promise<Category[]> {
    throw new Error('Method not implemented.');
  }
  async delete(id: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
  async create(category: Category): Promise<void> {
    const { id, name, createdAt, updatedAt } = category;

    try {
      await this.prisma.category.create({
        data: { id, name, createdAt, updatedAt },
      });
    } catch (err) {
      throw new ForbiddenException('Category already exists');
    }
  }
  async update(id: string, data: UpdateUserDTO): Promise<void> {
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    data.updatedAt = new Date();
    await this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }
  async login(email: string, password: string): Promise<any> {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Email or password incorrect');
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new ForbiddenException('password incorrect');
    }
  }
}
