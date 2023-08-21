import { Module } from '@nestjs/common';
import { CadastroDescricaoService } from './cadastro-descricao.service';
import { CadastroDescricaoController } from './cadastro-descricao.controller';

@Module({
  controllers: [CadastroDescricaoController],
  providers: [CadastroDescricaoService]
})
export class CadastroDescricaoModule {}
