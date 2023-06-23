import { IsString } from 'class-validator';

export class CreateProdutoUnidadeDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsString()
  idProduto: string;
  valorMin: number;
  valorMax: number;
  @IsString()
  unidadeMedidaId: string;
}
