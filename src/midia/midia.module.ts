import { Module } from '@nestjs/common';
import { MidiaService } from './midia.service';
import { MidiaController } from './midia.controller';

@Module({
  controllers: [MidiaController],
  providers: [MidiaService]
})
export class MidiaModule {}
