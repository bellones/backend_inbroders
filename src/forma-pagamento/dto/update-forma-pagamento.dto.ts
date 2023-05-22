import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateFormaPagamentoDto } from './create-forma-pagamento.dto';

export class UpdateFormaPagamentoDto extends PartialType(
  CreateFormaPagamentoDto,
) {
  @IsString()
  id: string;
}
