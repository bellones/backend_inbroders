import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreatePermissaoDto } from './create-permissao.dto';

export class UpdatePermissaoDto extends PartialType(CreatePermissaoDto) {
  @IsString()
  id: string;
}
