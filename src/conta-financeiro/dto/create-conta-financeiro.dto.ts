export class CreateContaFinanceiroDto {
  idEmpresa: string;
  banco: string;
  agencia: string;
  tipo: string;
  numero: string;
  validade?: string;
  titular: string;
  tipoPessoa: string;
  documento: string;
  idTipoConta: string;
}
