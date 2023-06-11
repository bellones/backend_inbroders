import { IsNumber, IsString } from 'class-validator';

export class CreateOrcamentoCategoriaDto {
  @IsNumber()
  orcamentoId: number;
  @IsString()
  descricao: string;
  valor: number;
}
