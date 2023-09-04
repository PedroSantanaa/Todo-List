import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';
import { PrismaService } from '../prisma.service';
import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDTO } from 'src/infra/http/dtos/loginUserDTO';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}
  createToken(user: LoginUserDTO): string {
    return this.jwtService.sign(
      {
        id: user.id,
        name: user.name,
        email: user.email,
      },
      {
        secret: process.env.JWT_SECRET,
        expiresIn: '7d',
        subject: user.id,
        issuer: 'login',
      },
    );
  }
  checkToken(token: string) {
    console.log(token);
    try {
      this.jwtService.verify(token, {
        issuer: 'login',
        secret: process.env.JWT_SECRET,
      });
    } catch (e) {
      console.log(e);
      throw new BadRequestException(e);
    }
  }
  isValidToken(token: string): boolean {
    try {
      this.checkToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }
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
  async login(email: string, password: string): Promise<string> {
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
      throw new ForbiddenException('Password incorrect');
    }
    return this.createToken(user);
  }
}
