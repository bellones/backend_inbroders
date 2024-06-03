import { PartialType } from '@nestjs/swagger';
import { CreatePermissaoDto } from './create-permissao.dto';

export class UpdatePermissaoDto extends PartialType(CreatePermissaoDto) {
  id: string;
}
