import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/UserRepository';

interface UpdateUserRequest {
  name?: string;
  email?: string;
  password?: string;
}

@Injectable()
export class UpdateUserCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, request: UpdateUserRequest): Promise<void> {
    await this.userRepository.update(id, request);
  }
}
