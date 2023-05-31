import { OrcamentoItem } from '@prisma/client';
import { IsString } from 'class-validator';

export class CreateOrcamentoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  orcamentoTipoId: string;
  @IsString()
  pessoaId: string;
  @IsString()
  nome: string;
  @IsString()
  descricao: string;
  valor: number;
  margem: number;
  desconto: number;
  descontoTipo: string;
  orcamentoItem: OrcamentoItem[];
}
