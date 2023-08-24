import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserCase } from 'src/application/use-cases/auth/create-user-case';
import { CreateUserDTO } from '../../dtos/createUserDTO';
import * as bcrypt from 'bcrypt';

@Controller('auth')
export class AuthController {
  constructor(private readonly createUserCase: CreateUserCase) {}

  @Post('/register')
  async register(@Body() body: CreateUserDTO) {
    const { name, email, password } = body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const { user } = await this.createUserCase.execute({
      name,
      email,
      password: hashedPassword,
    });
    return {
      user,
    };
  }
}
