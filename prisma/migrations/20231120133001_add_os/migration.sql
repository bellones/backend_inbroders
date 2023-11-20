/*
  Warnings:

  - Added the required column `projetoOSId` to the `AcompanhamentoItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AcompanhamentoItem" ADD COLUMN     "projetoOSId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ProjetoOS" (
    "id" TEXT NOT NULL,
    "osNum" INTEGER NOT NULL,
    "projetoItemId" TEXT NOT NULL,
    "pessoaId" TEXT,
    "qtdTrab" INTEGER NOT NULL,
    "valorTrab" DECIMAL(65,30) NOT NULL,
    "formaPagamentoId" TEXT NOT NULL,
    "totalTrab" DECIMAL(65,30) NOT NULL,
    "totalExec" DECIMAL(65,30) NOT NULL,
    "saldo" DECIMAL(65,30) NOT NULL,
    "totalPago" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ProjetoOS_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AcompanhamentoItem" ADD CONSTRAINT "AcompanhamentoItem_projetoOSId_fkey" FOREIGN KEY ("projetoOSId") REFERENCES "ProjetoOS"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_projetoItemId_fkey" FOREIGN KEY ("projetoItemId") REFERENCES "ProjetoItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_formaPagamentoId_fkey" FOREIGN KEY ("formaPagamentoId") REFERENCES "FormaPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
