export class CreateContasReceberDto {
  idEmpresa: string;
  dataCriacao: Date;
  dataEdicao: Date;
  data: Date;
  empresaSaiadaId: string;
  clientId: string;
  documento: string;
  emissao: Date;
  vencimento: Date;
  valor: number;
  regime: string;
  formaRecebimento: string;
  tipoRecebimento: string;
  observcao: string;
  status: string;
  tipoLancamentoId: string;
  origem: string;
  contaFinanceiroId: string;
  centroCustoId: string;
  condicaoPagamentoId: string;
}
