export class CreatePedidoCompraDto {
  idEmpresa: string;
  usuarioId: string;
  condicaoPagamentoId: string;
  pessoaId: string;
  empresaSaiadaId: string;
  responsavelId: string;
  icms: number;
  ipi: number;
  valor: number;
  valorPedido: number;
  desconto: number;
  frete: number;
  ordem: number;
  categoriaLancamentoId: string;
  dataCompra: Date;
  dataPrevista: Date;
  observacao: string;
}
