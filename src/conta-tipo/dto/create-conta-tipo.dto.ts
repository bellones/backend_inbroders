import { IsString } from 'class-validator';

export class CreateContaTipoDto {
  @IsString()
  nome: string;
  @IsString()
  idEmpresa: string;
}
