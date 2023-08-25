import { Body, Controller, Param, ParseUUIDPipe, Patch } from '@nestjs/common';
import { UpdateUserCase } from 'src/application/use-cases/user/update-user-case';
import { UpdateUserDTO } from '../../dtos/updateUserDTO';

@Controller('users')
export class UserController {
  constructor(private readonly updateUserCase: UpdateUserCase) {}

  @Patch(':uuid')
  async update(
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
    @Body() data: UpdateUserDTO,
  ) {
    return await this.updateUserCase.execute(uuid, data);
  }
}
