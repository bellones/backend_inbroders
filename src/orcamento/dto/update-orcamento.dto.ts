import { PartialType } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { CreateOrcamentoDto } from './create-orcamento.dto';

export class UpdateOrcamentoDto extends PartialType(CreateOrcamentoDto) {
  @IsNumber()
  id: number;
}
