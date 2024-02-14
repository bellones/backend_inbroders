import { PartialType } from '@nestjs/swagger';
import { CreateContaFinanceiroDto } from './create-conta-financeiro.dto';

export class UpdateContaFinanceiroDto extends PartialType(
  CreateContaFinanceiroDto,
) {
  id: string;
}
