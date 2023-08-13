import { PartialType } from '@nestjs/swagger';
import { CreateModeloItensOrcamentoDto } from './create-modelo-itens-orcamento.dto';

export class UpdateModeloItensOrcamentoDto extends PartialType(
  CreateModeloItensOrcamentoDto,
) {
  id: string;
}
