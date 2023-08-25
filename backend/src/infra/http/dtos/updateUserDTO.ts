import { CreateUserDTO } from './createUserDTO';
import { PartialType } from '@nestjs/swagger';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {}
