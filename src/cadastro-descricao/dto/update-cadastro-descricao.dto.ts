import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateCadastroDescricaoDto } from './create-cadastro-descricao.dto';

export class UpdateCadastroDescricaoDto extends PartialType(
  CreateCadastroDescricaoDto,
) {
  @IsString()
  id: string;
}
