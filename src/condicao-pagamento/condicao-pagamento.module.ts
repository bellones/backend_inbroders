import { Module } from '@nestjs/common';
import { CondicaoPagamentoService } from './condicao-pagamento.service';
import { CondicaoPagamentoController } from './condicao-pagamento.controller';

@Module({
  controllers: [CondicaoPagamentoController],
  providers: [CondicaoPagamentoService]
})
export class CondicaoPagamentoModule {}
