import { IsString } from 'class-validator';

export class CreateFinanceiroCategoriaDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
}
