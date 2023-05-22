import { Module } from '@nestjs/common';
import { LancamentoService } from './lancamento.service';
import { LancamentoController } from './lancamento.controller';

@Module({
  controllers: [LancamentoController],
  providers: [LancamentoService]
})
export class LancamentoModule {}
