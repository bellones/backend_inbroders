import { IsString } from 'class-validator';

export class CreateOrcamentoTipoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
}
