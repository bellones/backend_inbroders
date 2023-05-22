import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUserDTO } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDTO) {
  @IsString()
  id: string;
}
