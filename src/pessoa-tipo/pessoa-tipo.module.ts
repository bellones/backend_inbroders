import { Module } from '@nestjs/common';
import { PessoaTipoController } from './pessoa-tipo.controller';
import { PessoaTipoService } from './pessoa-tipo.service';

@Module({
  controllers: [PessoaTipoController],
  providers: [PessoaTipoService],
})
export class PessoaTipoModule {}
