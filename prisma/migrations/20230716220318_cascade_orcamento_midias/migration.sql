-- DropForeignKey
ALTER TABLE "OrcamentoMidias" DROP CONSTRAINT "OrcamentoMidias_orcamentoId_fkey";

-- AddForeignKey
ALTER TABLE "OrcamentoMidias" ADD CONSTRAINT "OrcamentoMidias_orcamentoId_fkey" FOREIGN KEY ("orcamentoId") REFERENCES "Orcamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
