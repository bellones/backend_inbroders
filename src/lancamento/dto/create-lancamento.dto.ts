export class CreateLancamentoDto {
  idEmpresa: string;
  idPessoa: string;
  data: Date;
  competencia: Date;
  vencimento: Date;
  acrescimo: number;
  desconto: number;
  valor: number;
  tipo: string;
  texto: string;
  contaPagarId?: string;
  contaReceberId?: string;
  pago?: boolean;
  dataPago?: Date;
  tipoRecebimento: string;
  obs: string;
}
