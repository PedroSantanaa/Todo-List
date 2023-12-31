import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/UserRepository';

interface LoginUserRequest {
  email: string;
  password: string;
}

@Injectable()
export class LoginUserCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(request: LoginUserRequest): Promise<string> {
    const { email, password } = request;
    return await this.userRepository.login(email, password);
  }
}
