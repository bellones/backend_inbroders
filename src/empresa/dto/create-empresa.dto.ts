import { IsString } from 'class-validator';

export class CreateEmpresaDto {
  @IsString()
  razaoSocial: string;
  nomeFantasia: string | undefined;
  inscricaoMunicipal: string | undefined;
  inscricaoEstadual: string | undefined;
  @IsString()
  cnpj: string;
  dataCadastro: Date | undefined;
  dataAtualizado: Date | undefined;
  ativo: boolean | undefined;
  matriz: boolean | undefined;
}
