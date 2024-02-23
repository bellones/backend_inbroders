export class CreateContasPagarDto {
  idEmpresa: string;
  centroCustoId: string;
  pessoaId: string;
  vencOriginal: Date;
  vencimento: Date;
  valor: number;
  dataEmissao: Date;
  numDocumento: string;
  competencia: Date;
  historico: string;
  condicaoPagamentoId: string;
  categoriaLancamentoId: string;
  ocorrenciaId: string;
  parcelaVencimento: number;
  parcela: number;
  usuarioId: string;
  subCategoriaLancamentoId: string;
  tipoRecebimento: string;
  contaFinanceiroId: string;
  origem: string;
  orcamentoDeptoId: string;
}
