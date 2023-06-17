/*
  Warnings:

  - You are about to drop the column `orcamentoTipoId` on the `Orcamento` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Orcamento" DROP CONSTRAINT "Orcamento_orcamentoTipoId_fkey";

-- AlterTable
ALTER TABLE "Orcamento" DROP COLUMN "orcamentoTipoId";
