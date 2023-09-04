import { UpdateUserDTO } from 'src/infra/http/dtos/updateUserDTO';
import { User } from '../entities/User';
import { LoginUserDTO } from 'src/infra/http/dtos/loginUserDTO';

export abstract class UserRepository {
  abstract create(user: User): Promise<void>;
  abstract update(id: string, data: UpdateUserDTO): Promise<void>;
  abstract login(email: string, password: string): Promise<string>;
  abstract createToken(user: LoginUserDTO): string;
  abstract checkToken(token: string): void;
  abstract isValidToken(token: string): boolean;
}
