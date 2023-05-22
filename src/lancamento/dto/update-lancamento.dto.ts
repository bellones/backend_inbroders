import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateLancamentoDto } from './create-lancamento.dto';

export class UpdateLancamentoDto extends PartialType(CreateLancamentoDto) {
  @IsString()
  id: string;
}
