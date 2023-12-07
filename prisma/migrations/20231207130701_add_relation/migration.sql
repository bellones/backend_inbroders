/*
  Warnings:

  - Added the required column `pedidoCompraId` to the `PedidoCompraItens` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PedidoCompraItens" ADD COLUMN     "pedidoCompraId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "PedidoCompraItens" ADD CONSTRAINT "PedidoCompraItens_pedidoCompraId_fkey" FOREIGN KEY ("pedidoCompraId") REFERENCES "PedidoCompra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
