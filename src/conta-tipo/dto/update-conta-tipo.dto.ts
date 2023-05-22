import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateContaTipoDto } from './create-conta-tipo.dto';

export class UpdateContaTipoDto extends PartialType(CreateContaTipoDto) {
  @IsString()
  id: string;
}
