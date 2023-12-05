-- DropForeignKey
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_categoriaLancamentoId_fkey";

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_categoriaLancamentoId_fkey" FOREIGN KEY ("categoriaLancamentoId") REFERENCES "CategoriaLancamento"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
