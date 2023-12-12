/*
  Warnings:

  - You are about to drop the column `empresaSaiadaId` on the `PedidoCompra` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PedidoCompra" DROP CONSTRAINT "PedidoCompra_empresaSaiadaId_fkey";

-- AlterTable
ALTER TABLE "PedidoCompra" DROP COLUMN "empresaSaiadaId";
