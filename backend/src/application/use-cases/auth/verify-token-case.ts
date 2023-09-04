import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/domain/repositories/UserRepository';

interface VerifyTokenRequest {
  token: string;
}

@Injectable()
export class LoginUserCase {
  constructor(private readonly userRepository: UserRepository) {}

  execute(request: VerifyTokenRequest): boolean {
    return this.userRepository.isValidToken(request.token);
  }
}
