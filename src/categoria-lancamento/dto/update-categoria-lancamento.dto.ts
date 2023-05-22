import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateCategoriaLancamentoDto } from './create-categoria-lancamento.dto';

export class UpdateCategoriaLancamentoDto extends PartialType(
  CreateCategoriaLancamentoDto,
) {
  @IsString()
  id: string;
}
