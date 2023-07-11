import { IsString } from 'class-validator';

export class CreateContatoDto {
  @IsString()
  idPessoa: string;
  nome: string;
  cargo: string;
  telefone: string;
  email: string;
  principal: boolean;
  ativo: boolean;
}
