-- AlterTable
ALTER TABLE "ContaFinanceiro" ADD COLUMN     "empresaSaiadaId" TEXT;

-- AddForeignKey
ALTER TABLE "ContaFinanceiro" ADD CONSTRAINT "ContaFinanceiro_empresaSaiadaId_fkey" FOREIGN KEY ("empresaSaiadaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
