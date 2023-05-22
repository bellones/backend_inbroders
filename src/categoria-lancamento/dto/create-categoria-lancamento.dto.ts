import { IsBoolean, IsString } from 'class-validator';

export class CreateCategoriaLancamentoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsBoolean()
  ativo: boolean;
}
