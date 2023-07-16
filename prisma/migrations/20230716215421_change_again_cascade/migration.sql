-- DropForeignKey
ALTER TABLE "EntregavelItens" DROP CONSTRAINT "EntregavelItens_orcamentoId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoCategoria" DROP CONSTRAINT "OrcamentoCategoria_orcamentoId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoItem" DROP CONSTRAINT "OrcamentoItem_orcamentoCategoriaId_fkey";

-- AddForeignKey
ALTER TABLE "OrcamentoCategoria" ADD CONSTRAINT "OrcamentoCategoria_orcamentoId_fkey" FOREIGN KEY ("orcamentoId") REFERENCES "Orcamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoItem" ADD CONSTRAINT "OrcamentoItem_orcamentoCategoriaId_fkey" FOREIGN KEY ("orcamentoCategoriaId") REFERENCES "OrcamentoCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntregavelItens" ADD CONSTRAINT "EntregavelItens_orcamentoId_fkey" FOREIGN KEY ("orcamentoId") REFERENCES "Orcamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
