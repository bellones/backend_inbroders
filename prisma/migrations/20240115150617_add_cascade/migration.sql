-- DropForeignKey
ALTER TABLE "SubCategoriaLancamento" DROP CONSTRAINT "SubCategoriaLancamento_categoriaLancamentoId_fkey";

-- AddForeignKey
ALTER TABLE "SubCategoriaLancamento" ADD CONSTRAINT "SubCategoriaLancamento_categoriaLancamentoId_fkey" FOREIGN KEY ("categoriaLancamentoId") REFERENCES "CategoriaLancamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
