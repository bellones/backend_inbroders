import { IsString } from 'class-validator';

export class CreatePessoaClassificacaoDto {
  @IsString()
  nome: string;
  @IsString()
  idEmpresa: string;
}
