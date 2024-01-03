-- CreateTable
CREATE TABLE "ProjetoProduto" (
    "id" TEXT NOT NULL,
    "projetoCategoriaId" TEXT NOT NULL,
    "novoProdutoId" TEXT NOT NULL,
    "descricao" TEXT,
    "quantidade" DECIMAL(65,30) NOT NULL,
    "valorUn" DECIMAL(65,30) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ProjetoProduto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjetoProduto" ADD CONSTRAINT "ProjetoProduto_projetoCategoriaId_fkey" FOREIGN KEY ("projetoCategoriaId") REFERENCES "ProjetoCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoProduto" ADD CONSTRAINT "ProjetoProduto_novoProdutoId_fkey" FOREIGN KEY ("novoProdutoId") REFERENCES "NovoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
