import { IsString } from 'class-validator';

export class CreateOcorrenciaDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
}
