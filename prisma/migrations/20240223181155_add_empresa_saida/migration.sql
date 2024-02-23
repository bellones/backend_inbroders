-- AlterTable
ALTER TABLE "PedidoCompra" ADD COLUMN     "empresaSaiadaId" TEXT;

-- AddForeignKey
ALTER TABLE "PedidoCompra" ADD CONSTRAINT "PedidoCompra_empresaSaiadaId_fkey" FOREIGN KEY ("empresaSaiadaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
