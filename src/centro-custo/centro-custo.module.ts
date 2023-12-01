import { Module } from '@nestjs/common';
import { CentroCustoService } from './centro-custo.service';
import { CentroCustoController } from './centro-custo.controller';

@Module({
  controllers: [CentroCustoController],
  providers: [CentroCustoService]
})
export class CentroCustoModule {}
