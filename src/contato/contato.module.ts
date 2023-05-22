import { Module } from '@nestjs/common';
import { ContatoController } from './contato.controller';
import { ContatoService } from './contato.service';

@Module({
  controllers: [ContatoController],
  providers: [ContatoService],
})
export class ContatoModule {}
