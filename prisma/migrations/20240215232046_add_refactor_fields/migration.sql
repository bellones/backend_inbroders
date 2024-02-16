/*
  Warnings:

  - Added the required column `orcamentoDeptoId` to the `ContasPagar` table without a default value. This is not possible if the table is not empty.
  - Added the required column `centroCustoId` to the `ContasReceber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `condicaoPagamentoId` to the `ContasReceber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orcamentoDeptoId` to the `ContasReceber` table without a default value. This is not possible if the table is not empty.
  - Added the required column `centroCustoId` to the `PedidoCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orcamentoDeptoId` to the `PedidoCompra` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipoRecebimento` to the `PedidoCompra` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContasPagar" ADD COLUMN     "orcamentoDeptoId" TEXT NOT NULL,
ADD COLUMN     "origem" TEXT;

-- AlterTable
ALTER TABLE "ContasReceber" ADD COLUMN     "centroCustoId" TEXT NOT NULL,
ADD COLUMN     "condicaoPagamentoId" TEXT NOT NULL,
ADD COLUMN     "orcamentoDeptoId" TEXT NOT NULL,
ADD COLUMN     "origem" TEXT;

-- AlterTable
ALTER TABLE "PedidoCompra" ADD COLUMN     "centroCustoId" TEXT NOT NULL,
ADD COLUMN     "orcamentoDeptoId" TEXT NOT NULL,
ADD COLUMN     "origem" TEXT,
ADD COLUMN     "tipoRecebimento" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "PedidoCompraServicoItens" (
    "id" TEXT NOT NULL,
    "pedidoCompraId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "descricao" TEXT,
    "unidadeMedidaId" TEXT,
    "quantidade" DECIMAL(65,30) NOT NULL,
    "valorUn" DECIMAL(65,30) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "PedidoCompraServicoItens_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompra" ADD CONSTRAINT "PedidoCompra_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompra" ADD CONSTRAINT "PedidoCompra_centroCustoId_fkey" FOREIGN KEY ("centroCustoId") REFERENCES "CentroCusto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompraServicoItens" ADD CONSTRAINT "PedidoCompraServicoItens_pedidoCompraId_fkey" FOREIGN KEY ("pedidoCompraId") REFERENCES "PedidoCompra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompraServicoItens" ADD CONSTRAINT "PedidoCompraServicoItens_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompraServicoItens" ADD CONSTRAINT "PedidoCompraServicoItens_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_centroCustoId_fkey" FOREIGN KEY ("centroCustoId") REFERENCES "CentroCusto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_condicaoPagamentoId_fkey" FOREIGN KEY ("condicaoPagamentoId") REFERENCES "CondicaoPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
