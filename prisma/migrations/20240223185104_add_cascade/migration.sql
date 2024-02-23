-- DropForeignKey
ALTER TABLE "PedidoCompraItens" DROP CONSTRAINT "PedidoCompraItens_pedidoCompraId_fkey";

-- DropForeignKey
ALTER TABLE "PedidoCompraServicoItens" DROP CONSTRAINT "PedidoCompraServicoItens_pedidoCompraId_fkey";

-- AddForeignKey
ALTER TABLE "PedidoCompraItens" ADD CONSTRAINT "PedidoCompraItens_pedidoCompraId_fkey" FOREIGN KEY ("pedidoCompraId") REFERENCES "PedidoCompra"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PedidoCompraServicoItens" ADD CONSTRAINT "PedidoCompraServicoItens_pedidoCompraId_fkey" FOREIGN KEY ("pedidoCompraId") REFERENCES "PedidoCompra"("id") ON DELETE CASCADE ON UPDATE CASCADE;
