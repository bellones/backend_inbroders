import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateAcompanhamentoDto } from './create-acompanhamento.dto';

export class UpdateAcompanhamentoDto extends PartialType(
  CreateAcompanhamentoDto,
) {
  @IsString()
  id: string;
}
