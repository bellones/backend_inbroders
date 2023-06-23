import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateEntregavelDto } from './create-entregavel.dto';

export class UpdateEntregavelDto extends PartialType(CreateEntregavelDto) {
  @IsString()
  id: string;
}
