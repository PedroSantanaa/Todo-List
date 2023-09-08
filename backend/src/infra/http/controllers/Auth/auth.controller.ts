import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserCase } from 'src/application/use-cases/auth/create-user-case';
import { CreateUserDTO } from '../../dtos/createUserDTO';
import * as bcrypt from 'bcrypt';
import { LoginUserCase } from 'src/application/use-cases/auth/login-user-case';
import { LoginUserDTO } from '../../dtos/loginUserDTO';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly createUserCase: CreateUserCase,
    private readonly loginUserCase: LoginUserCase,
  ) {}

  @Post('/register')
  async register(@Body() body: CreateUserDTO) {
    const { name, email, password } = body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    await this.createUserCase.execute({
      name,
      email,
      password: hashedPassword,
    });
    return { message: 'User created successfully' };
  }
  @Post('/login')
  async login(@Body() body: LoginUserDTO) {
    return this.loginUserCase.execute(body);
  }
  // @Post('/me')
  // async me(@Req() request) {
  //   const { authorization } = request.headers;
  //   const token = (authorization ?? '').split(' ')[1];
  // }
}
