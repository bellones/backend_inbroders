import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateContatoTipoDto } from './create-contato-tipo.dto';

export class UpdateContatoTipoDto extends PartialType(CreateContatoTipoDto) {
  @IsString()
  id: string;
}
