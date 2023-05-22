import { IsBoolean, IsString } from 'class-validator';

export class CreateEnderecoDto {
  @IsString()
  idPessoa: string;
  @IsString()
  cep: string;
  @IsString()
  local: string;
  @IsString()
  numero: string;
  @IsString()
  bairro: string;
  complemento: string | undefined;
  @IsString()
  cidade: string;
  @IsString()
  estado: string;
  @IsBoolean()
  ativo: boolean;
  @IsBoolean()
  principal: boolean;
}
