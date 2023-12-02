/*
  Warnings:

  - Made the column `formaPagamentoId` on table `ContasPagar` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_formaPagamentoId_fkey";

-- AlterTable
ALTER TABLE "ContasPagar" ALTER COLUMN "formaPagamentoId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_formaPagamentoId_fkey" FOREIGN KEY ("formaPagamentoId") REFERENCES "FormaPagamento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
