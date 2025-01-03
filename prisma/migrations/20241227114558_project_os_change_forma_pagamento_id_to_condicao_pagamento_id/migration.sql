/*
  Warnings:

  - Added the required column `condicaoPagamentoId` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProjetoOS" DROP CONSTRAINT "ProjetoOS_formaPagamentoId_fkey";

-- AlterTable
ALTER TABLE "ProjetoOS" ADD COLUMN     "condicaoPagamentoId" TEXT NOT NULL,
ALTER COLUMN "formaPagamentoId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_condicaoPagamentoId_fkey" FOREIGN KEY ("condicaoPagamentoId") REFERENCES "CondicaoPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_formaPagamentoId_fkey" FOREIGN KEY ("formaPagamentoId") REFERENCES "FormaPagamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
