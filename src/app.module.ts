import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { CategoriaLancamentoModule } from './categoria-lancamento/categoria-lancamento.module';
import { CondicaoPagamentoModule } from './condicao-pagamento/condicao-pagamento.module';
import { ContaTipoModule } from './conta-tipo/conta-tipo.module';
import { ContaModule } from './conta/conta.module';
import { ContatoTipoModule } from './contato-tipo/contato-tipo.module';
import { ContatoModule } from './contato/contato.module';
import { EmpresaModule } from './empresa/empresa.module';
import { EnderecoModule } from './endereco/endereco.module';
import { EntregavelModule } from './entregavel/entregavel.module';
import { FinanceiroCategoriaModule } from './financeiro-categoria/financeiro-categoria.module';
import { FinanceiroModule } from './financeiro/financeiro.module';
import { FormaPagamentoModule } from './forma-pagamento/forma-pagamento.module';
import { LancamentoModule } from './lancamento/lancamento.module';
import { MidiaModule } from './midia/midia.module';
import { ModeloNegocioModule } from './modelo-negocio/modelo-negocio.module';
import { OcorrenciaModule } from './ocorrencia/ocorrencia.module';
import { OrcamentoModule } from './orcamento/orcamento.module';
import { PermissaoModule } from './permissao/permissao.module';
import { PessoaClassificacaoModule } from './pessoa-classificacao/pessoa-classificacao.module';
import { PessoaTipoModule } from './pessoa-tipo/pessoa-tipo.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProdutoModule } from './produto/produto.module';
import { TipoLancamentoModule } from './tipo-lancamento/tipo-lancamento.module';
import { UnidadeModule } from './unidade/unidade.module';
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
    PessoaTipoModule,
    PessoaClassificacaoModule,
    PessoaModule,
    OrcamentoModule,
    UnidadeModule,
    ProdutoModule,
    ModeloNegocioModule,
    CondicaoPagamentoModule,
    MidiaModule,
    EntregavelModule,
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
