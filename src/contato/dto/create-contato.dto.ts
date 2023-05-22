import { IsString } from 'class-validator';

export class CreateContatoDto {
  @IsString()
  idPessoa: string;
  @IsString()
  idTipo: string;
  @IsString()
  descricao: string;
  @IsString()
  titulo: string;
  ativo: boolean;
}
