import { IsString } from 'class-validator';

export class CreateCondicaoPagamentoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsString()
  parcelas: number;
  baixaPrimeira: boolean;
  entrada: boolean;
  diaFixo: number;
}
