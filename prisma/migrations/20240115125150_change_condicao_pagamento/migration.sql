/*
  Warnings:

  - You are about to drop the column `condicao` on the `CondicaoPagamento` table. All the data in the column will be lost.
  - You are about to drop the column `divisor` on the `CondicaoPagamento` table. All the data in the column will be lost.
  - You are about to drop the column `variacao` on the `CondicaoPagamento` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "CondicaoPagamento" DROP COLUMN "condicao",
DROP COLUMN "divisor",
DROP COLUMN "variacao",
ADD COLUMN     "baixaPrimeira" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "diaFixo" DECIMAL(65,30) NOT NULL DEFAULT 1,
ADD COLUMN     "entrada" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "parcelas" DECIMAL(65,30) NOT NULL DEFAULT 1;
