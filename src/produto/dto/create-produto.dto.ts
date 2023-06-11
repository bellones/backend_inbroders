import { IsBoolean, IsString } from 'class-validator';

export class CreateProdutoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsBoolean()
  ativo: boolean;
}
