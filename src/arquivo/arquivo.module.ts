import { Module } from '@nestjs/common';
import { ArquivoController } from './arquivo.controller';
import { ArquivoService } from './arquivo.service';

@Module({
  controllers: [ArquivoController],
  providers: [ArquivoService],
})
export class ArquivoModule {}
