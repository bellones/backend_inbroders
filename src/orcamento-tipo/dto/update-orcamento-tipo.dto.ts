import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateOrcamentoTipoDto } from './create-orcamento-tipo.dto';

export class UpdateOrcamentoTipoDto extends PartialType(
  CreateOrcamentoTipoDto,
) {
  @IsString()
  id: string;
}
