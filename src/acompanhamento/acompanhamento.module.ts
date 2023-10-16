import { Module } from '@nestjs/common';
import { AcompanhamentoController } from './acompanhamento.controller';
import { AcompanhamentoService } from './acompanhamento.service';

@Module({
  controllers: [AcompanhamentoController],
  providers: [AcompanhamentoService],
})
export class AcompanhamentoModule {}
