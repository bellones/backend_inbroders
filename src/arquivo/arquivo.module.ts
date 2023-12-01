import { Module } from '@nestjs/common';
import { ArquivoService } from './arquivo.service';
import { ArquivoController } from './arquivo.controller';

@Module({
  controllers: [ArquivoController],
  providers: [ArquivoService]
})
export class ArquivoModule {}
