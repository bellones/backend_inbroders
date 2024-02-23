/*
  Warnings:

  - Added the required column `obs` to the `Lancamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoRecebimento` to the `Lancamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lancamento" ADD COLUMN     "obs" TEXT NOT NULL,
ADD COLUMN     "tipoRecebimento" TEXT NOT NULL;
