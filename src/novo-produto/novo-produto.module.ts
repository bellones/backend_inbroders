import { Module } from '@nestjs/common';
import { NovoProdutoService } from './novo-produto.service';
import { NovoProdutoController } from './novo-produto.controller';

@Module({
  controllers: [NovoProdutoController],
  providers: [NovoProdutoService]
})
export class NovoProdutoModule {}
