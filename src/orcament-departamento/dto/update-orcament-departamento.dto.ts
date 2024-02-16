import { PartialType } from '@nestjs/swagger';
import { CreateOrcamentDepartamentoDto } from './create-orcament-departamento.dto';

export class UpdateOrcamentDepartamentoDto extends PartialType(
  CreateOrcamentDepartamentoDto,
) {
  id: string;
}
