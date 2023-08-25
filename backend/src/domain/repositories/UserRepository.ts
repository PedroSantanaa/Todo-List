import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import { User } from '../entities/User';
import { HttpStatus } from '@nestjs/common';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract update(id: string, data: UpdateUserDTO): Promise<HttpStatus>;
  abstract login(email: string, password: string): Promise<HttpStatus>;
}
