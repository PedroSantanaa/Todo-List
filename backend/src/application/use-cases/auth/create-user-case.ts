import { Injectable } from '@nestjs/common';
import { User } from 'src/domain/entities/User';
import { UserRepository } from 'src/domain/repositories/UserRepository';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}
interface CreateUserResponse {
  user: User;
}

@Injectable()
export class CreateUserCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
    const { name, email, password } = request;
    const user = new User({ name, email, password });

    await this.userRepository.create(user);
    return {
      user,
    };
  }
}
