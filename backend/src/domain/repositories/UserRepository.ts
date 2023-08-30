import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import { User } from '../entities/User';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract update(id: string, data: UpdateUserDTO): Promise<void>;
  abstract login(email: string, password: string): Promise<void>;
}
