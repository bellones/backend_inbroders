/*
  Warnings:

  - Added the required column `contaPagarId` to the `Lancamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contaReceberId` to the `Lancamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lancamento" ADD COLUMN     "contaPagarId" TEXT NOT NULL,
ADD COLUMN     "contaReceberId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ContasReceber" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dataEdicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data" TIMESTAMP(3) NOT NULL,
    "empresaSaiadaId" TEXT,
    "clientId" TEXT,
    "documento" TEXT NOT NULL,
    "emissao" TIMESTAMP(3) NOT NULL,
    "vencimento" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "regime" TEXT NOT NULL,
    "formaRecebimento" TEXT NOT NULL,
    "tipoRecebimento" TEXT NOT NULL,
    "observcao" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tipoLancamentoId" TEXT NOT NULL,

    CONSTRAINT "ContasReceber_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContasReceberArquivo" (
    "id" TEXT NOT NULL,
    "contasReceberId" TEXT NOT NULL,
    "arquivoId" TEXT NOT NULL,

    CONSTRAINT "ContasReceberArquivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Lancamento" ADD CONSTRAINT "Lancamento_contaPagarId_fkey" FOREIGN KEY ("contaPagarId") REFERENCES "ContasPagar"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lancamento" ADD CONSTRAINT "Lancamento_contaReceberId_fkey" FOREIGN KEY ("contaReceberId") REFERENCES "ContasReceber"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_empresaSaiadaId_fkey" FOREIGN KEY ("empresaSaiadaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_tipoLancamentoId_fkey" FOREIGN KEY ("tipoLancamentoId") REFERENCES "TipoLancamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceberArquivo" ADD CONSTRAINT "ContasReceberArquivo_contasReceberId_fkey" FOREIGN KEY ("contasReceberId") REFERENCES "ContasReceber"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasReceberArquivo" ADD CONSTRAINT "ContasReceberArquivo_arquivoId_fkey" FOREIGN KEY ("arquivoId") REFERENCES "Arquivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
