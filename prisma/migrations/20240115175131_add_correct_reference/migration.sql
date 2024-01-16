-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_categoriaLancamentoId_fkey" FOREIGN KEY ("categoriaLancamentoId") REFERENCES "FinanceiroCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
