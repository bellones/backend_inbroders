import { IsEmail, IsString } from 'class-validator';

export class SenhaDto {
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
  @IsString()
  codigo: string;
}
