/*
  Warnings:

  - You are about to drop the column `empresaId` on the `ProdutoUnidade` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ProdutoUnidade" DROP CONSTRAINT "ProdutoUnidade_empresaId_fkey";

-- AlterTable
ALTER TABLE "ProdutoUnidade" DROP COLUMN "empresaId",
ADD COLUMN     "principal" BOOLEAN NOT NULL DEFAULT false;
