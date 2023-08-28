-- AlterTable
ALTER TABLE "ProdutoUnidade" ADD COLUMN     "condicaoPagamentoId" TEXT NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE "ProdutoUnidade" ADD CONSTRAINT "ProdutoUnidade_condicaoPagamentoId_fkey" FOREIGN KEY ("condicaoPagamentoId") REFERENCES "CondicaoPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
