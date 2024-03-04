import { PartialType } from '@nestjs/swagger';
import { CreateContaSaldoDto } from './create-conta_saldo.dto';

export class UpdateContaSaldoDto extends PartialType(CreateContaSaldoDto) {}
