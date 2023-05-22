import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoriaLancamentoModule } from './categoria-lancamento/categoria-lancamento.module';
import { ContaTipoModule } from './conta-tipo/conta-tipo.module';
import { ContaModule } from './conta/conta.module';
import { ContatoTipoModule } from './contato-tipo/contato-tipo.module';
import { ContatoModule } from './contato/contato.module';
import { EmpresaModule } from './empresa/empresa.module';
import { EnderecoModule } from './endereco/endereco.module';
import { FinanceiroCategoriaModule } from './financeiro-categoria/financeiro-categoria.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { OcorrenciaModule } from './ocorrencia/ocorrencia.module';
import { PermissaoModule } from './permissao/permissao.module';
import { PrismaModule } from './prisma/prisma.module';
import { TipoLancamentoModule } from './tipo-lancamento/tipo-lancamento.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    EmpresaModule,
    PermissaoModule,
    ContatoModule,
    EnderecoModule,
    ContatoTipoModule,
    ContaTipoModule,
    ContaModule,
    TipoLancamentoModule,
    CategoriaLancamentoModule,
    FormaPagamentoModule,
    OcorrenciaModule,
    FinanceiroCategoriaModule,
    FinanceiroModule,
    LancamentoModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
