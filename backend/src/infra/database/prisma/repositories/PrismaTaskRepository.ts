import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import { TaskRepository } from 'src/domain/repositories/TaskRepository';
import { Task } from 'src/domain/entities/Task';
import { GetTasksDTO } from 'src/infra/http/dtos/getTasksDTO';

@Injectable()
export class PrismaTaskRepository implements TaskRepository {
  constructor(private readonly prisma: PrismaService) {}
  getTasks(id: string): Promise<GetTasksDTO[]> {
    const tasks = this.prisma.task.findMany({
      where: {
        userId: id,
      },
    });
    return tasks;
  }

  async create(task: Task): Promise<void> {
    const { id, title, userId, categoryId, createdAt, updatedAt } = task;

    await this.prisma.task.create({
      data: { id, title, userId, categoryId, createdAt, updatedAt },
    });
    // const category = await this.prisma.category.findUnique({
    //   where: {
    //     id: categoryId,
    //   },
    //   include: {
    //     task: true,
    //   },
    // });
    // category.task.push(task);
  }
  async delete(id: string): Promise<void> {
    await this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
  async update(id: string, data: UpdateUserDTO): Promise<void> {
    data.updatedAt = new Date();
    await this.prisma.task.update({
      where: {
        id,
      },
      data,
    });
  }
}
