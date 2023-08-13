import { PartialType } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { CreateRascunhoOrcamentoDto } from './create-rascunho-orcamento.dto';

export class UpdateRascunhoOrcamentoDto extends PartialType(
  CreateRascunhoOrcamentoDto,
) {
  @IsInt()
  id: number;
}
