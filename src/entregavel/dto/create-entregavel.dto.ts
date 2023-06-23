import { IsString } from 'class-validator';

export class CreateEntregavelDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
}
