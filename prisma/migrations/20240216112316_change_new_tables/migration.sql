/*
  Warnings:

  - You are about to drop the column `orcamentoDeptoId` on the `ContasPagar` table. All the data in the column will be lost.
  - You are about to drop the column `orcamentoDeptoId` on the `ContasReceber` table. All the data in the column will be lost.
  - You are about to drop the column `orcamentoDeptoId` on the `PedidoCompra` table. All the data in the column will be lost.
  - Added the required column `contaFinanceiroId` to the `ContasPagar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contaFinanceiroId` to the `ContasReceber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contaFinanceiroId` to the `PedidoCompra` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_orcamentoDeptoId_fkey";

-- DropForeignKey
ALTER TABLE "ContasReceber" DROP CONSTRAINT "ContasReceber_orcamentoDeptoId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoCompra" DROP CONSTRAINT "PedidoCompra_orcamentoDeptoId_fkey";

-- AlterTable
ALTER TABLE "ContasPagar" DROP COLUMN "orcamentoDeptoId",
ADD COLUMN     "contaFinanceiroId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ContasReceber" DROP COLUMN "orcamentoDeptoId",
ADD COLUMN     "contaFinanceiroId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "PedidoCompra" DROP COLUMN "orcamentoDeptoId",
ADD COLUMN     "contaFinanceiroId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_contaFinanceiroId_fkey" FOREIGN KEY ("contaFinanceiroId") REFERENCES "ContaFinanceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompra" ADD CONSTRAINT "PedidoCompra_contaFinanceiroId_fkey" FOREIGN KEY ("contaFinanceiroId") REFERENCES "ContaFinanceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_contaFinanceiroId_fkey" FOREIGN KEY ("contaFinanceiroId") REFERENCES "ContaFinanceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
