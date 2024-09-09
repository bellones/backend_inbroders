import { IsEmail, IsString } from 'class-validator';

export class CodigoDto {
  @IsEmail()
  email: string;
  @IsString()
  codigo: string;
}
