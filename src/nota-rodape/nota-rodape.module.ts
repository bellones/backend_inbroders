import { Module } from '@nestjs/common';
import { NotaRodapeService } from './nota-rodape.service';
import { NotaRodapeController } from './nota-rodape.controller';

@Module({
  controllers: [NotaRodapeController],
  providers: [NotaRodapeService]
})
export class NotaRodapeModule {}
