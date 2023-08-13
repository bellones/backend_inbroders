import { Module } from '@nestjs/common';
import { RascunhoOrcamentoController } from './rascunho-orcamento.controller';
import { RascunhoOrcamentoService } from './rascunho-orcamento.service';

@Module({
  controllers: [RascunhoOrcamentoController],
  providers: [RascunhoOrcamentoService],
})
export class RascunhoOrcamentoModule {}
