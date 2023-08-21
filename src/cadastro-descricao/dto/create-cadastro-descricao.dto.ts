import { IsString } from 'class-validator';

export class CreateCadastroDescricaoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  descricao: string;
}
