import { IsString } from 'class-validator';

export class CreateContatoDto {
  @IsString()
  idPessoa: string;
  @IsString()
  idTipo: string;
  @IsString()
  descricao: string;
  ativo: boolean;
}
