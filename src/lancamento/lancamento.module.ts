import { Module } from '@nestjs/common';
import { LancamentoController } from './lancamento.controller';
import { LancamentoService } from './lancamento.service';

@Module({
  controllers: [LancamentoController],
  providers: [LancamentoService],
})
export class LancamentoModule {}
