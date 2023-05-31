import { Module } from '@nestjs/common';
import { OrcamentoService } from './orcamento.service';
import { OrcamentoController } from './orcamento.controller';

@Module({
  controllers: [OrcamentoController],
  providers: [OrcamentoService]
})
export class OrcamentoModule {}
