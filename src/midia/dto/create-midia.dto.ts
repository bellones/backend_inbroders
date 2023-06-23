import { IsString } from 'class-validator';

export class CreateMidiaDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
}
