import { IsNumber, IsString } from 'class-validator';

export class CreateCondicaoPagamentoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsNumber()
  parcelas: number;
  baixaPrimeira: boolean;
  entrada: boolean;
  diaFixo: number;
}
