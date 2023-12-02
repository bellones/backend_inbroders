/*
  Warnings:

  - You are about to drop the column `contasPagarId` on the `CondicaoPagamento` table. All the data in the column will be lost.
  - Added the required column `condicaoPagamentoId` to the `ContasPagar` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CondicaoPagamento" DROP CONSTRAINT "CondicaoPagamento_contasPagarId_fkey";

-- AlterTable
ALTER TABLE "CondicaoPagamento" DROP COLUMN "contasPagarId";

-- AlterTable
ALTER TABLE "ContasPagar" ADD COLUMN     "condicaoPagamentoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_condicaoPagamentoId_fkey" FOREIGN KEY ("condicaoPagamentoId") REFERENCES "CondicaoPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
