import { IsString } from 'class-validator';

export class CreateOrcamentoDto {
  @IsString()
  idEmpresa: string;
  versao: number;
  data: string;
  empresaSaiadaId: string;
  clientId: string;
  nome: string;
  status: string;
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
  diarias: string;
  validade: string;
  periodoVeiculacao: string;
  usuarioId: string;
  modeloNegocioId: string;
  acrescimo: number;
  comissao: number;
}
