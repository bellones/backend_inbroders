/*
  Warnings:

  - Added the required column `acrescimo` to the `Lancamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `desconto` to the `Lancamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lancamento" ADD COLUMN     "acrescimo" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "desconto" DECIMAL(65,30) NOT NULL;
