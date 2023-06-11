import { IsBoolean, IsString } from 'class-validator';

export class CreateServicoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsBoolean()
  ativo: boolean;
}
