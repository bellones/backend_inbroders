-- AlterTable
ALTER TABLE "ProjetoOS" ADD COLUMN     "contasPagarId" TEXT;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_contasPagarId_fkey" FOREIGN KEY ("contasPagarId") REFERENCES "ContasPagar"("id") ON DELETE SET NULL ON UPDATE CASCADE;
