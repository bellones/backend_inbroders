-- DropForeignKey
ALTER TABLE "ContasReceber" DROP CONSTRAINT "ContasReceber_tipoLancamentoId_fkey";

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_tipoLancamentoId_fkey" FOREIGN KEY ("tipoLancamentoId") REFERENCES "TipoConta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
