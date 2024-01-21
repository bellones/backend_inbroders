/*
  Warnings:

  - You are about to drop the column `arquivo` on the `Lancamento` table. All the data in the column will be lost.
  - You are about to drop the column `categoriaLancamentoId` on the `Lancamento` table. All the data in the column will be lost.
  - You are about to drop the column `contaId` on the `Lancamento` table. All the data in the column will be lost.
  - You are about to drop the column `idCategoria` on the `Lancamento` table. All the data in the column will be lost.
  - You are about to drop the column `subCategoriaLancamentoId` on the `Lancamento` table. All the data in the column will be lost.
  - You are about to drop the column `tipoLancamentoId` on the `Lancamento` table. All the data in the column will be lost.
  - Added the required column `vencimento` to the `Lancamento` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Lancamento" DROP CONSTRAINT "Lancamento_categoriaLancamentoId_fkey";

-- DropForeignKey
ALTER TABLE "Lancamento" DROP CONSTRAINT "Lancamento_contaId_fkey";

-- DropForeignKey
ALTER TABLE "Lancamento" DROP CONSTRAINT "Lancamento_idCategoria_fkey";

-- DropForeignKey
ALTER TABLE "Lancamento" DROP CONSTRAINT "Lancamento_subCategoriaLancamentoId_fkey";

-- DropForeignKey
ALTER TABLE "Lancamento" DROP CONSTRAINT "Lancamento_tipoLancamentoId_fkey";

-- AlterTable
ALTER TABLE "Lancamento" DROP COLUMN "arquivo",
DROP COLUMN "categoriaLancamentoId",
DROP COLUMN "contaId",
DROP COLUMN "idCategoria",
DROP COLUMN "subCategoriaLancamentoId",
DROP COLUMN "tipoLancamentoId",
ADD COLUMN     "vencimento" TIMESTAMP(3) NOT NULL;
