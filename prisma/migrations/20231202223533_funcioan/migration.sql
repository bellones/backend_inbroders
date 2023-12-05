-- DropForeignKey
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_formaPagamentoId_fkey";

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_formaPagamentoId_fkey" FOREIGN KEY ("formaPagamentoId") REFERENCES "FormaPagamento"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;
