import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateUnidadeDto } from './create-unidade.dto';

export class UpdateUnidadeDto extends PartialType(CreateUnidadeDto) {
  @IsString()
  id: string;
}
