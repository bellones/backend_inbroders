import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateServicoDto } from './create-servico.dto';

export class UpdateServicoDto extends PartialType(CreateServicoDto) {
  @IsString()
  id: string;
}
