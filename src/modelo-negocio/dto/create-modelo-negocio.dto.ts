import { IsString } from 'class-validator';

export class CreateModeloNegocioDto {
  @IsString()
  idEmpresa: string;
  nome: string;
  dataCriacao: string;
  validade: string;
  descricao: string;
  metaFaturamento: number;
  metaLucro: number;
  custoFixo: number;
  custoVenda: number;
  imposto: number;
  desconto: number;
}
