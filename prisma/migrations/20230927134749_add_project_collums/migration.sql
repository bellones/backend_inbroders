-- CreateTable
CREATE TABLE "Projeto" (
    "id" SERIAL NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "orcamentoId" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataEdicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "aprovado" BOOLEAN NOT NULL DEFAULT false,
    "aprovadoCalculo" BOOLEAN NOT NULL DEFAULT false,
    "descricao" TEXT,
    "linkDiretor" TEXT NOT NULL,
    "linkPastaExecutiva" TEXT NOT NULL,
    "linkPastaFinalizacao" TEXT NOT NULL,
    "resumoCronograma" TEXT NOT NULL,
    "linkCronograma" TEXT NOT NULL,
    "notasInternas" TEXT NOT NULL,
    "notasClienteAgencia" TEXT NOT NULL,
    "notasFaturamento" TEXT NOT NULL,

    CONSTRAINT "Projeto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjetoCategoria" (
    "id" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "orcado" DECIMAL(65,30) NOT NULL,
    "trabalhado" DECIMAL(65,30) NOT NULL,
    "executado" DECIMAL(65,30) NOT NULL,
    "aprovado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ProjetoCategoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjetoItem" (
    "id" TEXT NOT NULL,
    "projetoCategoriaId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "descricao" TEXT,
    "unidadeMedidaId" TEXT,
    "quantidade" DECIMAL(65,30) NOT NULL,
    "valorUn" DECIMAL(65,30) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,
    "orcado" DECIMAL(65,30) NOT NULL,
    "trabalhado" DECIMAL(65,30) NOT NULL,
    "executado" DECIMAL(65,30) NOT NULL,
    "usuarioId" TEXT,
    "aprovado" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "ProjetoItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjetoAprovador" (
    "id" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "nivel" INTEGER NOT NULL,

    CONSTRAINT "ProjetoAprovador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjetoPessoa" (
    "id" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "pessoaId" TEXT NOT NULL,

    CONSTRAINT "ProjetoPessoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjetoContato" (
    "id" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL DEFAULT '',
    "cargo" TEXT NOT NULL DEFAULT '',
    "telefone" TEXT NOT NULL DEFAULT '',
    "email" TEXT NOT NULL DEFAULT '',
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN DEFAULT true,

    CONSTRAINT "ProjetoContato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProjetoArquivos" (
    "id" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "arquivo" TEXT NOT NULL,

    CONSTRAINT "ProjetoArquivos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Acompanhamento" (
    "id" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "horas" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Acompanhamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcompanhamentoCategoria" (
    "id" TEXT NOT NULL,
    "acompanhamentoId" TEXT NOT NULL,
    "projetoCategoriaId" TEXT NOT NULL,
    "horas" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcompanhamentoCategoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AcompanhamentoItem" (
    "id" TEXT NOT NULL,
    "acompanhamentoCategoriaId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "horas" INTEGER NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AcompanhamentoItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apontamento" (
    "id" TEXT NOT NULL,
    "acompanhamentoItemId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "dataInicio" TIMESTAMP(3) NOT NULL,
    "dataFim" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,

    CONSTRAINT "Apontamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApontamentoComentario" (
    "id" TEXT NOT NULL,
    "apontamentoId" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ApontamentoComentario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ApontamentoArquivo" (
    "id" TEXT NOT NULL,
    "apontamentoId" TEXT NOT NULL,
    "arquivo" TEXT NOT NULL,

    CONSTRAINT "ApontamentoArquivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_orcamentoId_fkey" FOREIGN KEY ("orcamentoId") REFERENCES "Orcamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projeto" ADD CONSTRAINT "Projeto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoCategoria" ADD CONSTRAINT "ProjetoCategoria_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoItem" ADD CONSTRAINT "ProjetoItem_projetoCategoriaId_fkey" FOREIGN KEY ("projetoCategoriaId") REFERENCES "ProjetoCategoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoItem" ADD CONSTRAINT "ProjetoItem_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoItem" ADD CONSTRAINT "ProjetoItem_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoItem" ADD CONSTRAINT "ProjetoItem_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoAprovador" ADD CONSTRAINT "ProjetoAprovador_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoAprovador" ADD CONSTRAINT "ProjetoAprovador_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoPessoa" ADD CONSTRAINT "ProjetoPessoa_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoPessoa" ADD CONSTRAINT "ProjetoPessoa_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoContato" ADD CONSTRAINT "ProjetoContato_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoArquivos" ADD CONSTRAINT "ProjetoArquivos_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Acompanhamento" ADD CONSTRAINT "Acompanhamento_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcompanhamentoCategoria" ADD CONSTRAINT "AcompanhamentoCategoria_acompanhamentoId_fkey" FOREIGN KEY ("acompanhamentoId") REFERENCES "Acompanhamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcompanhamentoCategoria" ADD CONSTRAINT "AcompanhamentoCategoria_projetoCategoriaId_fkey" FOREIGN KEY ("projetoCategoriaId") REFERENCES "ProjetoCategoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcompanhamentoItem" ADD CONSTRAINT "AcompanhamentoItem_acompanhamentoCategoriaId_fkey" FOREIGN KEY ("acompanhamentoCategoriaId") REFERENCES "AcompanhamentoCategoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AcompanhamentoItem" ADD CONSTRAINT "AcompanhamentoItem_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apontamento" ADD CONSTRAINT "Apontamento_acompanhamentoItemId_fkey" FOREIGN KEY ("acompanhamentoItemId") REFERENCES "AcompanhamentoItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Apontamento" ADD CONSTRAINT "Apontamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApontamentoComentario" ADD CONSTRAINT "ApontamentoComentario_apontamentoId_fkey" FOREIGN KEY ("apontamentoId") REFERENCES "Apontamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApontamentoArquivo" ADD CONSTRAINT "ApontamentoArquivo_apontamentoId_fkey" FOREIGN KEY ("apontamentoId") REFERENCES "Apontamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
