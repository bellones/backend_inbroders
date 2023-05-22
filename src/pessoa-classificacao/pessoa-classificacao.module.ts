import { Module } from '@nestjs/common';
import { PessoaClassificacaoController } from './pessoa-classificacao.controller';
import { PessoaClassificacaoService } from './pessoa-classificacao.service';

@Module({
  controllers: [PessoaClassificacaoController],
  providers: [PessoaClassificacaoService],
})
export class PessoaClassificacaoModule {}
