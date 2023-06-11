import { Module } from '@nestjs/common';
import { UnidadeService } from './unidade.service';
import { UnidadeController } from './unidade.controller';

@Module({
  controllers: [UnidadeController],
  providers: [UnidadeService]
})
export class UnidadeModule {}
