import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreatePessoaClassificacaoDto } from './create-pessoa-classificacao.dto';

export class UpdatePessoaClassificacaoDto extends PartialType(
  CreatePessoaClassificacaoDto,
) {
  @IsString()
  id: string;
}
