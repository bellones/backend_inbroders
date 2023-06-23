import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateCondicaoPagamentoDto } from './create-condicao-pagamento.dto';

export class UpdateCondicaoPagamentoDto extends PartialType(
  CreateCondicaoPagamentoDto,
) {
  @IsString()
  id: string;
}
