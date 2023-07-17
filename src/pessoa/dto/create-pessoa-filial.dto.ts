import { IsString } from 'class-validator';

export class CreatePessoaFilialDto {
  @IsString()
  idEmpresa: string;
  @IsString()
  idFilial: string;
  @IsString()
  idPessoa: string;
}
