import { IsString } from 'class-validator';

export class CreateFormaPagamentoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
}
