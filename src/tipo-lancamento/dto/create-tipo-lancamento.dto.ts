import { IsBoolean, IsString } from 'class-validator';

export class CreateTipoLancamentoDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  nome: string;
  @IsBoolean()
  ativo: boolean;
}
