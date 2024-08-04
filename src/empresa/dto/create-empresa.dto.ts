import { IsString } from 'class-validator';
import { CreateEmpresaContatoDto } from './create-empresa-contato.dto';
import { CreateEmpresaEnderecoDto } from './create-empresa-endereco.dto';

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
  cnae: string;
  atividadePrincipal: string;
  regimeTributario: string;
  tamanhoEmpresa: string;
  comercio: boolean;
  ecommerce: boolean;
  industria: boolean;
  servicos: boolean;
  faturamentoUltimoAno: number;
  quantidadeFuncionarios: number;
  contato?: CreateEmpresaContatoDto[] | undefined;
  endereco?: CreateEmpresaEnderecoDto[] | undefined;
}
