/*
  Warnings:

  - The primary key for the `Orcamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `ativo` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `descontoTipo` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `margem` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `pessoaId` on the `Orcamento` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `Orcamento` table. All the data in the column will be lost.
  - The `id` column on the `Orcamento` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `orcamentoId` on the `OrcamentoItem` table. All the data in the column will be lost.
  - You are about to drop the column `unidade` on the `OrcamentoItem` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `OrcamentoItem` table. All the data in the column will be lost.
  - Added the required column `status` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orcamentoCategoriaId` to the `OrcamentoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produtoId` to the `OrcamentoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorTotal` to the `OrcamentoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorUn` to the `OrcamentoItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Orcamento" DROP CONSTRAINT "Orcamento_pessoaId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoItem" DROP CONSTRAINT "OrcamentoItem_orcamentoId_fkey";

-- AlterTable
ALTER TABLE "Orcamento" DROP CONSTRAINT "Orcamento_pkey",
DROP COLUMN "ativo",
DROP COLUMN "descontoTipo",
DROP COLUMN "margem",
DROP COLUMN "nome",
DROP COLUMN "pessoaId",
DROP COLUMN "valor",
ADD COLUMN     "acrescimo" DECIMAL(65,30),
ADD COLUMN     "agenciaId" TEXT,
ADD COLUMN     "bv" DECIMAL(65,30),
ADD COLUMN     "clientId" TEXT,
ADD COLUMN     "comissao" DECIMAL(65,30),
ADD COLUMN     "comissionadoId" TEXT,
ADD COLUMN     "condicaoPagamento" TEXT,
ADD COLUMN     "contatoAgencia" TEXT,
ADD COLUMN     "contatoCliente" TEXT,
ADD COLUMN     "copias" TEXT,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "diaria" TEXT,
ADD COLUMN     "duracao" TEXT,
ADD COLUMN     "duracaoVeiculacao" TEXT,
ADD COLUMN     "imposto" DECIMAL(65,30),
ADD COLUMN     "midiaVeiculos" TEXT,
ADD COLUMN     "nomePeca" TEXT,
ADD COLUMN     "periodo" TEXT,
ADD COLUMN     "pracaVeiculacao" TEXT,
ADD COLUMN     "produtores" TEXT,
ADD COLUMN     "servicoId" TEXT,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "taxaProdutora" DECIMAL(65,30),
ADD COLUMN     "tipoFormato" TEXT,
ADD COLUMN     "tipoImposto" TEXT,
ADD COLUMN     "tipoTaxaProdutora" TEXT,
ADD COLUMN     "tipoVeiculacao" TEXT,
ADD COLUMN     "titulo" TEXT,
ADD COLUMN     "validade" TEXT,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ALTER COLUMN "desconto" DROP NOT NULL,
ALTER COLUMN "data" DROP DEFAULT,
ADD CONSTRAINT "Orcamento_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "OrcamentoItem" DROP COLUMN "orcamentoId",
DROP COLUMN "unidade",
DROP COLUMN "valor",
ADD COLUMN     "orcamentoCategoriaId" TEXT NOT NULL,
ADD COLUMN     "produtoId" TEXT NOT NULL,
ADD COLUMN     "unidadeMedidaId" TEXT,
ADD COLUMN     "valorTotal" TEXT NOT NULL,
ADD COLUMN     "valorUn" TEXT NOT NULL,
ALTER COLUMN "descricao" DROP NOT NULL,
ALTER COLUMN "quantidade" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "UnidadeMedida" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "UnidadeMedida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Servico" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Servico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrcamentoCategoria" (
    "id" TEXT NOT NULL,
    "orcamentoId" INTEGER,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrcamentoCategoria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UnidadeMedida" ADD CONSTRAINT "UnidadeMedida_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Servico" ADD CONSTRAINT "Servico_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_comissionadoId_fkey" FOREIGN KEY ("comissionadoId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_agenciaId_fkey" FOREIGN KEY ("agenciaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_servicoId_fkey" FOREIGN KEY ("servicoId") REFERENCES "Servico"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoCategoria" ADD CONSTRAINT "OrcamentoCategoria_orcamentoId_fkey" FOREIGN KEY ("orcamentoId") REFERENCES "Orcamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoItem" ADD CONSTRAINT "OrcamentoItem_orcamentoCategoriaId_fkey" FOREIGN KEY ("orcamentoCategoriaId") REFERENCES "OrcamentoCategoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoItem" ADD CONSTRAINT "OrcamentoItem_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoItem" ADD CONSTRAINT "OrcamentoItem_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE SET NULL ON UPDATE CASCADE;
