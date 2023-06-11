/*
  Warnings:

  - Changed the type of `quantidade` on the `OrcamentoItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `valorTotal` on the `OrcamentoItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `valorUn` on the `OrcamentoItem` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "OrcamentoItem" DROP COLUMN "quantidade",
ADD COLUMN     "quantidade" DECIMAL(65,30) NOT NULL,
DROP COLUMN "valorTotal",
ADD COLUMN     "valorTotal" DECIMAL(65,30) NOT NULL,
DROP COLUMN "valorUn",
ADD COLUMN     "valorUn" DECIMAL(65,30) NOT NULL;
