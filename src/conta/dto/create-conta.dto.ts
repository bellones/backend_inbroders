import { IsString } from 'class-validator';

export class CreateContaDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  idTipoConta: string;
  @IsString()
  banco: string;
  @IsString()
  agencia: string;
  @IsString()
  conta: string;
  @IsString()
  ativo: boolean;
}
