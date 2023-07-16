/*
  Warnings:

  - Added the required column `descricao` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `notaRodateTexto` to the `Orcamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "notaRodateTexto" TEXT NOT NULL;
