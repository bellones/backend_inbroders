import { IsString } from 'class-validator';

export class CreatePessoaDto {
  @IsString()
  idTipo: string;
  @IsString()
  idEmpresa: string;
  @IsString()
  classificacao: string;
  @IsString()
  nome: string;
  documento: string;
  razaoSocial?: string;
  nomeFantasia?: string;
  inscricaoMunicipal?: string;
  inscricaoEstadual?: string;
  contribuinte?: boolean;
}
