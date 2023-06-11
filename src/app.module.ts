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
import { PessoaTipoModule } from './pessoa-tipo/pessoa-tipo.module';
import { PessoaClassificacaoModule } from './pessoa-classificacao/pessoa-classificacao.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { OrcamentoTipoModule } from './orcamento-tipo/orcamento-tipo.module';
import { OrcamentoModule } from './orcamento/orcamento.module';
import { UnidadeModule } from './unidade/unidade.module';
import { ServicoModule } from './servico/servico.module';
import { ProdutoModule } from './produto/produto.module';
import { ServicoModule } from './servico/servico.module';

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
    PessoaTipoModule,
    PessoaClassificacaoModule,
    PessoaModule,
    OrcamentoTipoModule,
    OrcamentoModule,
    UnidadeModule,
    ServicoModule,
    ProdutoModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
