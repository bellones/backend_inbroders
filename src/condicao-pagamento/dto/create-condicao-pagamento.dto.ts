import { IsString } from 'class-validator';

export class CreateCondicaoPagamentoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsString()
  condicao: string;
  variacao: number;
  divisor: number;
}
