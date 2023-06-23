import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateModeloNegocioDto } from './create-modelo-negocio.dto';

export class UpdateModeloNegocioDto extends PartialType(
  CreateModeloNegocioDto,
) {
  @IsString()
  id: string;
}
