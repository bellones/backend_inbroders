import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateProdutoDto } from './create-produto.dto';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
  @IsString()
  id: string;
}
