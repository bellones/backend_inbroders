import { Module } from '@nestjs/common';
import { ContatoTipoController } from './contato-tipo.controller';
import { ContatoTipoService } from './contato-tipo.service';

@Module({
  controllers: [ContatoTipoController],
  providers: [ContatoTipoService],
})
export class ContatoTipoModule {}
