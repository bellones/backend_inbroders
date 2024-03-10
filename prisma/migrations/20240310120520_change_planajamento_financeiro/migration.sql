/*
  Warnings:

  - You are about to drop the column `produtoId` on the `OrcamentoDeptoItem` table. All the data in the column will be lost.
  - You are about to drop the column `quantidade` on the `OrcamentoDeptoItem` table. All the data in the column will be lost.
  - You are about to drop the column `unidadeMedidaId` on the `OrcamentoDeptoItem` table. All the data in the column will be lost.
  - You are about to drop the column `valorUn` on the `OrcamentoDeptoItem` table. All the data in the column will be lost.
  - You are about to drop the `OrcamentoDeptoProduto` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ordem` to the `OrcamentoDeptoCategoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nivel` to the `OrcamentoDeptoItem` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrcamentoDeptoItem" DROP CONSTRAINT "OrcamentoDeptoItem_produtoId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoDeptoProduto" DROP CONSTRAINT "OrcamentoDeptoProduto_novoProdutoId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoDeptoProduto" DROP CONSTRAINT "OrcamentoDeptoProduto_orcamentoDeptoCategoriaId_fkey";

-- AlterTable
ALTER TABLE "OrcamentoDeptoCategoria" ADD COLUMN     "ordem" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "OrcamentoDeptoItem" DROP COLUMN "produtoId",
DROP COLUMN "quantidade",
DROP COLUMN "unidadeMedidaId",
DROP COLUMN "valorUn",
ADD COLUMN     "nivel" INTEGER NOT NULL,
ADD COLUMN     "orcamentoDeptoItemId" TEXT;

-- DropTable
DROP TABLE "OrcamentoDeptoProduto";

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoItem" ADD CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoItemId_fkey" FOREIGN KEY ("orcamentoDeptoItemId") REFERENCES "OrcamentoDeptoItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
