import { PartialType } from '@nestjs/swagger';
import { CreateNovoProdutoDto } from './create-novo-produto.dto';

export class UpdateNovoProdutoDto extends PartialType(CreateNovoProdutoDto) {
  id: string;
}
