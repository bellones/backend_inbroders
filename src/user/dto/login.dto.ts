import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  usuario: string;
  @IsString()
  senha: string;
}
