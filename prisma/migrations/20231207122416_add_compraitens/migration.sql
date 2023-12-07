/*
  Warnings:

  - Added the required column `valorPedido` to the `PedidoCompra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PedidoCompra" ADD COLUMN     "empresaSaiadaId" TEXT,
ADD COLUMN     "valorPedido" DECIMAL(65,30) NOT NULL;

-- CreateTable
CREATE TABLE "PedidoCompraItens" (
    "id" TEXT NOT NULL,
    "novoProdutoId" TEXT NOT NULL,
    "unidadeMedidaId" TEXT NOT NULL,
    "produtoNome" TEXT NOT NULL,
    "unidadeNome" TEXT NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valorUn" DECIMAL(65,30) NOT NULL,
    "percentualIpi" TEXT NOT NULL,
    "valorIpi" DECIMAL(65,30) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PedidoCompraItens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PedidoCompra" ADD CONSTRAINT "PedidoCompra_empresaSaiadaId_fkey" FOREIGN KEY ("empresaSaiadaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompraItens" ADD CONSTRAINT "PedidoCompraItens_novoProdutoId_fkey" FOREIGN KEY ("novoProdutoId") REFERENCES "NovoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompraItens" ADD CONSTRAINT "PedidoCompraItens_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
