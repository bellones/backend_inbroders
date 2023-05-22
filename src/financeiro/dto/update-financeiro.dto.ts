import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateFinanceiroDto } from './create-financeiro.dto';

export class UpdateFinanceiroDto extends PartialType(CreateFinanceiroDto) {
  @IsString()
  id: string;
}
