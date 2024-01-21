-- DropForeignKey
ALTER TABLE "Lancamento" DROP CONSTRAINT "Lancamento_contaPagarId_fkey";

-- DropForeignKey
ALTER TABLE "Lancamento" DROP CONSTRAINT "Lancamento_contaReceberId_fkey";

-- AlterTable
ALTER TABLE "Lancamento" ALTER COLUMN "contaPagarId" DROP NOT NULL,
ALTER COLUMN "contaReceberId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Lancamento" ADD CONSTRAINT "Lancamento_contaPagarId_fkey" FOREIGN KEY ("contaPagarId") REFERENCES "ContasPagar"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Lancamento" ADD CONSTRAINT "Lancamento_contaReceberId_fkey" FOREIGN KEY ("contaReceberId") REFERENCES "ContasReceber"("id") ON DELETE SET NULL ON UPDATE CASCADE;
