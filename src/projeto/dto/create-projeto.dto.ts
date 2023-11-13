export class CreateProjetoDto {
  idEmpresa: string;
  orcamentoId: number;
  usuarioId: string;
  dataCriacao: Date;
  dataEdicao: Date;
  aprovado: boolean;
  aprovadoCalculo: boolean;
  descricao: string;
  linkDiretor: string;
  linkPastaExecutiva: string;
  linkPastaFinalizacao: string;
  resumoCronograma: string;
  linkCronograma: string;
  notasInternas: string;
  notasClienteAgencia: string;
  notasFaturamento: string;
  status: string;
  metaEconomia: number;
  reducaoGloblal: number;
  valorReduzido: string;
  limiteManejo: string;
  valorManejo: string;
  taxaEconomia: string;
  valorEconomia: string;
  percentualProdutor: string;
  retornoProdutor: string;
}
