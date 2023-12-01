import { PartialType } from '@nestjs/swagger';
import { CreateContasPagarDto } from './create-contas-pagar.dto';

export class UpdateContasPagarDto extends PartialType(CreateContasPagarDto) {
  id: string;
}
