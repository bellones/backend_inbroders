import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateNotaRodapeDto } from './create-nota-rodape.dto';

export class UpdateNotaRodapeDto extends PartialType(CreateNotaRodapeDto) {
  @IsString()
  id: string;
}
