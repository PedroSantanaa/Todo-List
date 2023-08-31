import { ForbiddenException, Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { PrismaService } from '../prisma.service';
import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import * as bcrypt from 'bcrypt';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}
  async create(user: User): Promise<void> {
    const { id, name, email, password, createdAt, updatedAt } = user;

    try {
      await this.prisma.user.create({
        data: { id, name, email, password, createdAt, updatedAt },
      });
    } catch (err) {
      throw new ForbiddenException('Email already exists');
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
  async login(email: string, password: string): Promise<void> {
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
