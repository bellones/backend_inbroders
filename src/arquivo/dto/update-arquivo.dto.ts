import { PartialType } from '@nestjs/swagger';
import { CreateArquivoDto } from './create-arquivo.dto';

export class UpdateArquivoDto extends PartialType(CreateArquivoDto) {
  id: string;
}
