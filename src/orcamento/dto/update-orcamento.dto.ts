import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateOrcamentoDto } from './create-orcamento.dto';

export class UpdateOrcamentoDto extends PartialType(CreateOrcamentoDto) {
  @IsString()
  id: string;
}
