-- DropForeignKey
ALTER TABLE "Lancamento" DROP CONSTRAINT "Lancamento_idCategoria_fkey";

-- DropForeignKey
ALTER TABLE "SubCategoriaLancamento" DROP CONSTRAINT "SubCategoriaLancamento_categoriaLancamentoId_fkey";

-- AlterTable
ALTER TABLE "Lancamento" ADD COLUMN     "categoriaLancamentoId" TEXT;

-- AddForeignKey
ALTER TABLE "SubCategoriaLancamento" ADD CONSTRAINT "SubCategoriaLancamento_categoriaLancamentoId_fkey" FOREIGN KEY ("categoriaLancamentoId") REFERENCES "FinanceiroCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lancamento" ADD CONSTRAINT "Lancamento_idCategoria_fkey" FOREIGN KEY ("idCategoria") REFERENCES "FinanceiroCategoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lancamento" ADD CONSTRAINT "Lancamento_categoriaLancamentoId_fkey" FOREIGN KEY ("categoriaLancamentoId") REFERENCES "CategoriaLancamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
