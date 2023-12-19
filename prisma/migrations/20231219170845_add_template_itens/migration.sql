-- CreateTable
CREATE TABLE "ModeloOrcamentoItemProdutoList" (
    "id" TEXT NOT NULL,
    "modeloOrcamentoItemCategoriaId" TEXT NOT NULL,
    "novoProdutoId" TEXT NOT NULL,
    "descricao" TEXT,
    "quantidade" DECIMAL(65,30) NOT NULL,
    "valorUn" DECIMAL(65,30) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ModeloOrcamentoItemProdutoList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ModeloOrcamentoItemProdutoList" ADD CONSTRAINT "ModeloOrcamentoItemProdutoList_modeloOrcamentoItemCategori_fkey" FOREIGN KEY ("modeloOrcamentoItemCategoriaId") REFERENCES "ModeloOrcamentoItemCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModeloOrcamentoItemProdutoList" ADD CONSTRAINT "ModeloOrcamentoItemProdutoList_novoProdutoId_fkey" FOREIGN KEY ("novoProdutoId") REFERENCES "NovoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
