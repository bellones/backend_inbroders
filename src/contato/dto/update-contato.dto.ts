import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateContatoDto } from './create-contato.dto';

export class UpdateContatoDto extends PartialType(CreateContatoDto) {
  @IsString()
  id: string;
}
