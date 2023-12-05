/*
  Warnings:

  - You are about to drop the column `categoriaLancamentoId` on the `ContasPagar` table. All the data in the column will be lost.
  - You are about to drop the column `formaPagamentoId` on the `ContasPagar` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_categoriaLancamentoId_fkey";

-- DropForeignKey
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_formaPagamentoId_fkey";

-- AlterTable
ALTER TABLE "ContasPagar" DROP COLUMN "categoriaLancamentoId",
DROP COLUMN "formaPagamentoId";
