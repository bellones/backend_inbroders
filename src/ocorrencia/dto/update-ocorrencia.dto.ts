import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateOcorrenciaDto } from './create-ocorrencia.dto';

export class UpdateOcorrenciaDto extends PartialType(CreateOcorrenciaDto) {
  @IsString()
  id: string;
}
