import { IsBoolean, IsEmail, IsNumber, IsString } from 'class-validator';
import { CreateUserAddressDTO } from './create-user-address.dto';
import { CreateUserContactDTO } from './create-user-contact.dto';
export class CreateUserDTO {
  @IsString()
  nome: string;
  @IsEmail()
  email: string;
  @IsString()
  senha: string;
  @IsString()
  idEmpresa: string;
  @IsBoolean()
  ativo: boolean;

  nascimento: Date;
  @IsString()
  cpf: string;
  rg: string;

  dataAdmissao: Date;
  pispasep: string;
  ctps: string;
  codigo: string;
  @IsNumber()
  salario: number;
  endereco?: CreateUserAddressDTO[] | null;
  contato?: CreateUserContactDTO[] | null;
  permissoes?: string;
}
