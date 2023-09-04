import { PartialType } from '@nestjs/swagger';
import { CreateUserDTO } from './createUserDTO';

export class LoginUserDTO extends PartialType(CreateUserDTO) {
  id: string;
  email: string;
  password: string;
}
