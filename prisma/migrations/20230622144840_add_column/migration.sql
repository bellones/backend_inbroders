/*
  Warnings:

  - Added the required column `acrescimo` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comissao` to the `Orcamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "acrescimo" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "comissao" DECIMAL(65,30) NOT NULL;
