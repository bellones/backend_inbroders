import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateLancamentoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  idCategoria: string;
  idPessoa: string | undefined;
  @IsString()
  contaId: string;
  @IsDate()
  data: Date;
  @IsDate()
  competencia: Date;
  @IsNumber()
  valor: number;
  @IsString()
  tipo: string;
  texto: string | undefined;
  arquivo: string | undefined;
  @IsString()
  tipoLancamentoId: string;
}
