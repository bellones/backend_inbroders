import { IsString } from 'class-validator';

export class CreateNotaRodapeDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  descricao: string;
}
