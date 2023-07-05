import { IsString } from 'class-validator';

export class CreateProdutoUnidadeDto {
  nome: string;
  @IsString()
  idProduto: string;
  valorMin: number;
  valorMax: number;
  @IsString()
  unidadeMedidaId: string;
  diasPgto: string;
  descricao: string;
}
