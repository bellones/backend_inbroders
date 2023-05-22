import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateEmpresaDto } from './create-empresa.dto';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
  @IsString()
  id: string;
}
