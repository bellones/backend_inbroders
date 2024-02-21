/*
  Warnings:

  - You are about to drop the column `orcamentoDeptoId` on the `OrcamentoDeptoItem` table. All the data in the column will be lost.
  - You are about to drop the column `orcamentoDeptoId` on the `OrcamentoDeptoProduto` table. All the data in the column will be lost.
  - Added the required column `orcamentoDeptoCategoriaId` to the `OrcamentoDeptoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orcamentoDeptoCategoriaId` to the `OrcamentoDeptoProduto` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrcamentoDeptoItem" DROP CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoDeptoProduto" DROP CONSTRAINT "OrcamentoDeptoProduto_orcamentoDeptoId_fkey";

-- AlterTable
ALTER TABLE "OrcamentoDeptoItem" DROP COLUMN "orcamentoDeptoId",
ADD COLUMN     "orcamentoDeptoCategoriaId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "OrcamentoDeptoProduto" DROP COLUMN "orcamentoDeptoId",
ADD COLUMN     "orcamentoDeptoCategoriaId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "OrcamentoDeptoCategoria" (
    "id" TEXT NOT NULL,
    "orcamentoDeptoId" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrcamentoDeptoCategoria_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoCategoria" ADD CONSTRAINT "OrcamentoDeptoCategoria_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoItem" ADD CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoCategoriaId_fkey" FOREIGN KEY ("orcamentoDeptoCategoriaId") REFERENCES "OrcamentoDeptoCategoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoProduto" ADD CONSTRAINT "OrcamentoDeptoProduto_orcamentoDeptoCategoriaId_fkey" FOREIGN KEY ("orcamentoDeptoCategoriaId") REFERENCES "OrcamentoDeptoCategoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
