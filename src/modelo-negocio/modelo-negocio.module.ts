import { Module } from '@nestjs/common';
import { ModeloNegocioController } from './modelo-negocio.controller';
import { ModeloNegocioService } from './modelo-negocio.service';

@Module({
  controllers: [ModeloNegocioController],
  providers: [ModeloNegocioService],
})
export class ModeloNegocioModule {}
