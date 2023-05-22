import { Module } from '@nestjs/common';
import { ContaTipoController } from './conta-tipo.controller';
import { ContaTipoService } from './conta-tipo.service';

@Module({
  controllers: [ContaTipoController],
  providers: [ContaTipoService],
})
export class ContaTipoModule {}
