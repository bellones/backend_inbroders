import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateTipoLancamentoDto } from './create-tipo-lancamento.dto';

export class UpdateTipoLancamentoDto extends PartialType(
  CreateTipoLancamentoDto,
) {
  @IsString()
  id: string;
}
