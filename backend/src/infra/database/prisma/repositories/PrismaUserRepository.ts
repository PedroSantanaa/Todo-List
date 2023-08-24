import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(user: User): Promise<void> {
    const { id, name, email, password, createdAt, updatedAt } = user;

    await this.prisma.user.create({
      data: { id, name, email, password, createdAt, updatedAt },
    });
  }
}
