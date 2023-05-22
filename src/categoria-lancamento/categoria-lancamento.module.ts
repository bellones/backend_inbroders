import { Module } from '@nestjs/common';
import { CategoriaLancamentoService } from './categoria-lancamento.service';
import { CategoriaLancamentoController } from './categoria-lancamento.controller';

@Module({
  controllers: [CategoriaLancamentoController],
  providers: [CategoriaLancamentoService]
})
export class CategoriaLancamentoModule {}
