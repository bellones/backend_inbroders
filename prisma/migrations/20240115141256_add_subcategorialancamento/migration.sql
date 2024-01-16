-- AlterTable
ALTER TABLE "ContasPagar" ADD COLUMN     "subCategoriaLancamentoId" TEXT;

-- AlterTable
ALTER TABLE "Lancamento" ADD COLUMN     "subCategoriaLancamentoId" TEXT;

-- CreateTable
CREATE TABLE "SubCategoriaLancamento" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "categoriaLancamentoId" TEXT NOT NULL,
    "ativo" BOOLEAN DEFAULT true,

    CONSTRAINT "SubCategoriaLancamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SubCategoriaLancamento" ADD CONSTRAINT "SubCategoriaLancamento_categoriaLancamentoId_fkey" FOREIGN KEY ("categoriaLancamentoId") REFERENCES "CategoriaLancamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lancamento" ADD CONSTRAINT "Lancamento_subCategoriaLancamentoId_fkey" FOREIGN KEY ("subCategoriaLancamentoId") REFERENCES "SubCategoriaLancamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_subCategoriaLancamentoId_fkey" FOREIGN KEY ("subCategoriaLancamentoId") REFERENCES "SubCategoriaLancamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
