import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreatePessoaTipoDto } from './create-pessoa-tipo.dto';

export class UpdatePessoaTipoDto extends PartialType(CreatePessoaTipoDto) {
  @IsString()
  id: string;
}
