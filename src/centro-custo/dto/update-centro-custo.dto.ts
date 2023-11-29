import { PartialType } from '@nestjs/swagger';
import { CreateCentroCustoDto } from './create-centro-custo.dto';

export class UpdateCentroCustoDto extends PartialType(CreateCentroCustoDto) {
  id: string;
}
