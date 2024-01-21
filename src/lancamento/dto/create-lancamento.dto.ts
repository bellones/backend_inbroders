export class CreateLancamentoDto {
  idEmpresa: string;
  idPessoa: string;
  data: Date;
  competencia: Date;
  vencimento: Date;
  valor: number;
  tipo: string;
  texto: string;
  contaPagarId?: string;
  contaReceberId?: string;
}
