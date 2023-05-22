import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateFinanceiroDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  idPessoa: string;
  @IsString()
  formaPagamentoId: string;
  @IsDate()
  vencimento: Date;
  @IsDate()
  vecimentoOriginal: Date;
  @IsNumber()
  valor: number;
  emissao: Date | undefined;
  competencia: Date | undefined;
  documento: string | undefined;
  texto: string | undefined;
  arquivo: string | undefined;
  ocorrenciaId: string | undefined;
  financeiroCategoriaId: string | undefined;
  @IsString()
  dataPagamento: string;
}
