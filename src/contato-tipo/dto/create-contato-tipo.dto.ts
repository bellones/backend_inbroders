import { IsString } from 'class-validator';

export class CreateContatoTipoDto {
  @IsString()
  nome: string;
  @IsString()
  idEmpresa: string;
}
