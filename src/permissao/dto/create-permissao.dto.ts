import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreatePermissaoDto {
  @IsString()
  @IsNotEmpty()
  idTipo: string;
  @IsString()
  @IsNotEmpty()
  idUsuario: string;
  @IsBoolean()
  listar: boolean;
  @IsBoolean()
  cadastrar: boolean;
  @IsBoolean()
  editar: boolean;
  @IsBoolean()
  excluir: boolean;
}
