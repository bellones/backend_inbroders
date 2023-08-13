import { Module } from '@nestjs/common';
import { ModeloItensOrcamentoController } from './modelo-itens-orcamento.controller';
import { ModeloItensOrcamentoService } from './modelo-itens-orcamento.service';

@Module({
  controllers: [ModeloItensOrcamentoController],
  providers: [ModeloItensOrcamentoService],
})
export class ModeloItensOrcamentoModule {}
