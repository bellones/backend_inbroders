import { IsBoolean, IsString } from 'class-validator';

export class CreateUnidadeDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsBoolean()
  ativo: boolean;
}
