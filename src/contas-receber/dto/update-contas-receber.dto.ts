import { PartialType } from '@nestjs/swagger';
import { CreateContasReceberDto } from './create-contas-receber.dto';

export class UpdateContasReceberDto extends PartialType(
  CreateContasReceberDto,
) {
  id: string;
}
