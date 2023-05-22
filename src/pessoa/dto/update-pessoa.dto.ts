import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreatePessoaDto } from './create-pessoa.dto';

export class UpdatePessoaDto extends PartialType(CreatePessoaDto) {
  @IsString()
  id: string;
}
