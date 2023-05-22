import { Module } from '@nestjs/common';
import { OcorrenciaController } from './ocorrencia.controller';
import { OcorrenciaService } from './ocorrencia.service';

@Module({
  controllers: [OcorrenciaController],
  providers: [OcorrenciaService],
})
export class OcorrenciaModule {}
