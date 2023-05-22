import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateFinanceiroCategoriaDto } from './create-financeiro-categoria.dto';

export class UpdateFinanceiroCategoriaDto extends PartialType(
  CreateFinanceiroCategoriaDto,
) {
  @IsString()
  id: string;
}
