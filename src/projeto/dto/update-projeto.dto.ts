import { PartialType } from '@nestjs/swagger';
import { IsInt } from 'class-validator';
import { CreateProjetoDto } from './create-projeto.dto';

export class UpdateProjetoDto extends PartialType(CreateProjetoDto) {
  @IsInt()
  id: number;
}
