import { Module } from '@nestjs/common';
import { TipoLancamentoController } from './tipo-lancamento.controller';
import { TipoLancamentoService } from './tipo-lancamento.service';

@Module({
  controllers: [TipoLancamentoController],
  providers: [TipoLancamentoService],
})
export class TipoLancamentoModule {}
