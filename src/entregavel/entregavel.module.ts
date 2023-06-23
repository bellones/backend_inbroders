import { Module } from '@nestjs/common';
import { EntregavelService } from './entregavel.service';
import { EntregavelController } from './entregavel.controller';

@Module({
  controllers: [EntregavelController],
  providers: [EntregavelService]
})
export class EntregavelModule {}
