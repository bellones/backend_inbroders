-- DropForeignKey
ALTER TABLE "OrcamentoDeptoItem" DROP CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoCategoriaId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoDeptoProduto" DROP CONSTRAINT "OrcamentoDeptoProduto_orcamentoDeptoCategoriaId_fkey";

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoItem" ADD CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoCategoriaId_fkey" FOREIGN KEY ("orcamentoDeptoCategoriaId") REFERENCES "OrcamentoDeptoCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoProduto" ADD CONSTRAINT "OrcamentoDeptoProduto_orcamentoDeptoCategoriaId_fkey" FOREIGN KEY ("orcamentoDeptoCategoriaId") REFERENCES "OrcamentoDeptoCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
