import { Module } from '@nestjs/common';
import { AcompanhamentoService } from './acompanhamento.service';
import { AcompanhamentoController } from './acompanhamento.controller';

@Module({
  controllers: [AcompanhamentoController],
  providers: [AcompanhamentoService]
})
export class AcompanhamentoModule {}
