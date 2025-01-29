import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class CreateTaskDto {
  id?: string;

  @IsString()
  @IsNotEmpty()
  code: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  titulo: string;

  @IsString()
  @IsNotEmpty()
  descricao: string;

  @IsInt()
  @IsNotEmpty()
  projetoId: number;

  @IsString()
  @IsNotEmpty()
  dataEstimativa: Date;

  @IsString()
  @IsNotEmpty()
  dataCriacao: Date;

  @IsString()
  @IsNotEmpty()
  userCriadorId: string;

  @IsString()
  @IsNotEmpty()
  userResponsavelId: string;
}
