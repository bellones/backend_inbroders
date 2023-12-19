-- CreateTable
CREATE TABLE "OrcamentoProduto" (
    "id" TEXT NOT NULL,
    "orcamentoCategoriaId" TEXT NOT NULL,
    "novoProdutoId" TEXT NOT NULL,
    "descricao" TEXT,
    "quantidade" DECIMAL(65,30) NOT NULL,
    "valorUn" DECIMAL(65,30) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrcamentoProduto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrcamentoProduto" ADD CONSTRAINT "OrcamentoProduto_orcamentoCategoriaId_fkey" FOREIGN KEY ("orcamentoCategoriaId") REFERENCES "OrcamentoCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoProduto" ADD CONSTRAINT "OrcamentoProduto_novoProdutoId_fkey" FOREIGN KEY ("novoProdutoId") REFERENCES "NovoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
