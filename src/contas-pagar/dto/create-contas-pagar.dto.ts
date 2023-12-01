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
  formaPagamentoId: string;
  categoriaLancamentoId: string;
  ocorrenciaId: string;
  parcelaVencimento: number;
  parcela: number;
  usuarioId: string;
}
