import { Module } from '@nestjs/common';
import { OrcamentoTipoService } from './orcamento-tipo.service';
import { OrcamentoTipoController } from './orcamento-tipo.controller';

@Module({
  controllers: [OrcamentoTipoController],
  providers: [OrcamentoTipoService]
})
export class OrcamentoTipoModule {}
