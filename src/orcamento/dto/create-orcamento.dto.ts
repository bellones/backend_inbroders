import { IsString } from 'class-validator';

export class CreateOrcamentoDto {
  @IsString()
  idEmpresa: string;
  clientId: string;
  contatoCliente: string;
  comissionadoId: string;
  agenciaId: string;
  contatoAgencia: string;
  servicoId: string;
  tipoTaxaProdutora: string;
  taxaProdutora: number;
  tipoImposto: string;
  imposto: number;
  bv: number;
  comissao: number;
  desconto: number;
  acrescimo: number;
  data: Date;
  @IsString()
  titulo: string;
  status: string;
  descricao: string;
  condicaoPagamento: string;
  tipoVeiculacao: string;
  duracaoVeiculacao: string;
  nomePeca: string;
  duracao: string;
  tipoFormato: string;
  midiaVeiculos: string;
  pracaVeiculacao: string;
  periodo: string;
  diaria: string;
  validade: string;
  copias: string;
  produtores: string;
}
