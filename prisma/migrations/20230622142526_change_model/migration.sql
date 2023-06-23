/*
  Warnings:

  - You are about to drop the column `acrescimo` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `bv` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `comissao` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `comissionadoId` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `condicaoPagamento` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `copias` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `desconto` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `diaria` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `duracao` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `duracaoVeiculacao` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `imposto` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `midiaVeiculos` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `nomePeca` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `periodo` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `pracaVeiculacao` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `produtores` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `servicoId` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `taxaProdutora` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `tipoComisao` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `tipoFormato` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `tipoImposto` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `tipoTaxaProdutora` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `tipoVeiculacao` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the `OrcamentoTipo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Servico` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `condicaoPagamentoId` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contatoAgenciaEmail` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contatoAgenciaTelefone` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contatoClienteEmail` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contatoClienteTelefone` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diarias` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notas` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodoVeiculacao` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `showAgencia` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `versao` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Made the column `contatoAgencia` on table `Orcamento` required. This step will fail if there are existing NULL values in that column.
  - Made the column `contatoCliente` on table `Orcamento` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `validade` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `diasPgto` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orcamento" DROP CONSTRAINT "Orcamento_comissionadoId_fkey";

-- DropForeignKey
ALTER TABLE "Orcamento" DROP CONSTRAINT "Orcamento_servicoId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoTipo" DROP CONSTRAINT "OrcamentoTipo_idEmpresa_fkey";

-- DropForeignKey
ALTER TABLE "Servico" DROP CONSTRAINT "Servico_idEmpresa_fkey";

-- AlterTable
ALTER TABLE "Orcamento" DROP COLUMN "acrescimo",
DROP COLUMN "bv",
DROP COLUMN "comissao",
DROP COLUMN "comissionadoId",
DROP COLUMN "condicaoPagamento",
DROP COLUMN "copias",
DROP COLUMN "desconto",
DROP COLUMN "descricao",
DROP COLUMN "diaria",
DROP COLUMN "duracao",
DROP COLUMN "duracaoVeiculacao",
DROP COLUMN "imposto",
DROP COLUMN "midiaVeiculos",
DROP COLUMN "nomePeca",
DROP COLUMN "periodo",
DROP COLUMN "pracaVeiculacao",
DROP COLUMN "produtores",
DROP COLUMN "servicoId",
DROP COLUMN "taxaProdutora",
DROP COLUMN "tipoComisao",
DROP COLUMN "tipoFormato",
DROP COLUMN "tipoImposto",
DROP COLUMN "tipoTaxaProdutora",
DROP COLUMN "tipoVeiculacao",
DROP COLUMN "titulo",
ADD COLUMN     "condicaoPagamentoId" TEXT NOT NULL,
ADD COLUMN     "contatoAgenciaEmail" TEXT NOT NULL,
ADD COLUMN     "contatoAgenciaTelefone" TEXT NOT NULL,
ADD COLUMN     "contatoClienteEmail" TEXT NOT NULL,
ADD COLUMN     "contatoClienteTelefone" TEXT NOT NULL,
ADD COLUMN     "diarias" TEXT NOT NULL,
ADD COLUMN     "empresaSaiadaId" TEXT,
ADD COLUMN     "modeloNegocioId" TEXT,
ADD COLUMN     "nome" TEXT NOT NULL,
ADD COLUMN     "notas" TEXT NOT NULL,
ADD COLUMN     "periodoVeiculacao" TEXT NOT NULL,
ADD COLUMN     "showAgencia" BOOLEAN NOT NULL,
ADD COLUMN     "usuarioId" TEXT,
ADD COLUMN     "versao" INTEGER NOT NULL,
ALTER COLUMN "contatoAgencia" SET NOT NULL,
ALTER COLUMN "contatoCliente" SET NOT NULL,
DROP COLUMN "validade",
ADD COLUMN     "validade" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "diasPgto" TEXT NOT NULL;

-- DropTable
DROP TABLE "OrcamentoTipo";

-- DropTable
DROP TABLE "Servico";

-- CreateTable
CREATE TABLE "Midias" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Midias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entregavel" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Entregavel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntregavelItens" (
    "id" TEXT NOT NULL,
    "entregavelId" TEXT NOT NULL,
    "orcamentoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "EntregavelItens_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdutoUnidade" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "unidadeMedidaId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "valorMin" DECIMAL(65,30) NOT NULL,
    "valorMax" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ProdutoUnidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModeloNegocio" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "validade" TIMESTAMP(3) NOT NULL,
    "descricao" TEXT NOT NULL,
    "metaFaturamento" DECIMAL(65,30) NOT NULL,
    "metaLucro" DECIMAL(65,30) NOT NULL,
    "custoFixo" DECIMAL(65,30) NOT NULL,
    "custoVenda" DECIMAL(65,30) NOT NULL,
    "imposto" DECIMAL(65,30) NOT NULL,
    "desconto" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ModeloNegocio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrcamentoMidias" (
    "id" TEXT NOT NULL,
    "orcamentoId" INTEGER,
    "midiasId" TEXT NOT NULL,

    CONSTRAINT "OrcamentoMidias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CondicaoPagamento" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "condicao" TEXT NOT NULL,
    "variacao" DECIMAL(65,30) NOT NULL,
    "divisor" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "CondicaoPagamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Midias" ADD CONSTRAINT "Midias_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Entregavel" ADD CONSTRAINT "Entregavel_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntregavelItens" ADD CONSTRAINT "EntregavelItens_entregavelId_fkey" FOREIGN KEY ("entregavelId") REFERENCES "Entregavel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntregavelItens" ADD CONSTRAINT "EntregavelItens_orcamentoId_fkey" FOREIGN KEY ("orcamentoId") REFERENCES "Orcamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoUnidade" ADD CONSTRAINT "ProdutoUnidade_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoUnidade" ADD CONSTRAINT "ProdutoUnidade_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoUnidade" ADD CONSTRAINT "ProdutoUnidade_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModeloNegocio" ADD CONSTRAINT "ModeloNegocio_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_empresaSaiadaId_fkey" FOREIGN KEY ("empresaSaiadaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_condicaoPagamentoId_fkey" FOREIGN KEY ("condicaoPagamentoId") REFERENCES "CondicaoPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_modeloNegocioId_fkey" FOREIGN KEY ("modeloNegocioId") REFERENCES "ModeloNegocio"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoMidias" ADD CONSTRAINT "OrcamentoMidias_orcamentoId_fkey" FOREIGN KEY ("orcamentoId") REFERENCES "Orcamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoMidias" ADD CONSTRAINT "OrcamentoMidias_midiasId_fkey" FOREIGN KEY ("midiasId") REFERENCES "Midias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CondicaoPagamento" ADD CONSTRAINT "CondicaoPagamento_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
