import { IsString } from 'class-validator';

export class CreatePessoaTipoDto {
  @IsString()
  nome: string;
  @IsString()
  idEmpresa: string;
}
