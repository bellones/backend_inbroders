/*
  Warnings:

  - Added the required column `orcamentoDeptoId` to the `ContasPagar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orcamentoDeptoId` to the `PedidoCompra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContasPagar" ADD COLUMN     "orcamentoDeptoId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PedidoCompra" ADD COLUMN     "orcamentoDeptoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompra" ADD CONSTRAINT "PedidoCompra_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
