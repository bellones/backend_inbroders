/*
  Warnings:

  - Added the required column `categoriaLancamentoId` to the `ContasPagar` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CondicaoPagamento" ADD COLUMN     "contasPagarId" TEXT;

-- AlterTable
ALTER TABLE "ContasPagar" ADD COLUMN     "categoriaLancamentoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CondicaoPagamento" ADD CONSTRAINT "CondicaoPagamento_contasPagarId_fkey" FOREIGN KEY ("contasPagarId") REFERENCES "ContasPagar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_categoriaLancamentoId_fkey" FOREIGN KEY ("categoriaLancamentoId") REFERENCES "CategoriaLancamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
