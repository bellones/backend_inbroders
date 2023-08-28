-- DropForeignKey
ALTER TABLE "ProdutoUnidade" DROP CONSTRAINT "ProdutoUnidade_condicaoPagamentoId_fkey";

-- AlterTable
ALTER TABLE "ProdutoUnidade" ALTER COLUMN "condicaoPagamentoId" DROP NOT NULL,
ALTER COLUMN "condicaoPagamentoId" DROP DEFAULT;

-- AddForeignKey
ALTER TABLE "ProdutoUnidade" ADD CONSTRAINT "ProdutoUnidade_condicaoPagamentoId_fkey" FOREIGN KEY ("condicaoPagamentoId") REFERENCES "CondicaoPagamento"("id") ON DELETE SET NULL ON UPDATE CASCADE;
