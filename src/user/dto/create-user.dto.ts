import { IsBoolean, IsEmail, IsString } from 'class-validator';
export class CreateUserDTO {
  @IsString()
  nome: string;
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
  @IsString()
  idempresa: string;
  @IsBoolean()
  ativo: boolean;
}
