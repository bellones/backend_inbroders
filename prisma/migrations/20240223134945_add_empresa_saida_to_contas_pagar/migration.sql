-- AlterTable
ALTER TABLE "ContasPagar" ADD COLUMN     "empresaSaiadaId" TEXT;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_empresaSaiadaId_fkey" FOREIGN KEY ("empresaSaiadaId") REFERENCES "Pessoa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
