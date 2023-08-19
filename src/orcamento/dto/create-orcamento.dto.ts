import { IsString } from 'class-validator';

export class CreateOrcamentoDto {
  @IsString()
  idEmpresa: string;
  versao: number;
  data: string;
  dataEdicao: string;
  empresaSaiadaId: string;
  clientId: string;
  nome: string;
  status: string;
  nomeVersao: string;
  notas: string;
  contatoCliente: string;
  contatoClienteTelefone: string;
  contatoClienteEmail: string;
  agenciaId: string;
  showAgencia: boolean;
  contatoAgencia: string;
  contatoAgenciaTelefone: string;
  contatoAgenciaEmail: string;
  condicaoPagamentoId: string;
  validade: string;
  periodoVeiculacao: string;
  usuarioId: string;
  modeloNegocioId: string;
  acrescimo: number;
  comissao: number;
  notaRodapeId: string;
  notaRodapeTexto: string;
  desconto: number;
  total: number;
  descricao: string;
  tipoDesconto: string;
  tipoAcrescimo: string;
  tipoComissao: string;
}
