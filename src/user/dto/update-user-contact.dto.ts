import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUserAddressDTO } from './create-user-address.dto';

export class UpdateUserContactDto extends PartialType(CreateUserAddressDTO) {
  @IsString()
  id: string;
}
