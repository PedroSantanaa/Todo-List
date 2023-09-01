import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import * as bcrypt from 'bcrypt';
import { TaskRepository } from 'src/domain/repositories/TaskRepository';
import { Task } from 'src/domain/entities/Task';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private readonly prisma: PrismaService) {}
  getTasks(): Promise<Task[]> {
    throw new Error('Method not implemented.');
  }

  async create(task: Task): Promise<void> {
    const { id, title, userId, categoryId, createdAt, updatedAt } = task;

    await this.prisma.task.create({
      data: { id, title, userId, categoryId, createdAt, updatedAt },
    });
    const category = await this.prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      include: {
        task: true,
      },
    });
    category.task.push(task);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.category.delete({
      where: {
        id,
      },
    });
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
}
