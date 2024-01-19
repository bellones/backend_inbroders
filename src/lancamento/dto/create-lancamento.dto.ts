export class CreateLancamentoDto {
  idEmpresa: string;
  idCategoria: string;
  idPessoa: string;
  contaId: string;
  data: Date;
  competencia: Date;
  valor: number;
  tipo: string;
  texto: string;
  arquivo: string;
  tipoLancamentoId: string;
  subCategoriaLancamentoId: string;
  categoriaLancamentoId: string;
  contaPagarId?: string;
  contaReceberId?: string;
}
