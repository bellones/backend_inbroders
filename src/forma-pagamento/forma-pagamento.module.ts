import { Module } from '@nestjs/common';
import { FormaPagamentoController } from './forma-pagamento.controller';
import { FormaPagamentoService } from './forma-pagamento.service';

@Module({
  controllers: [FormaPagamentoController],
  providers: [FormaPagamentoService],
})
export class FormaPagamentoModule {}
