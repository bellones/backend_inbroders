/*
  Warnings:

  - Added the required column `tipoLancamentoId` to the `Lancamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lancamento" ADD COLUMN     "tipoLancamentoId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Lancamento" ADD CONSTRAINT "Lancamento_tipoLancamentoId_fkey" FOREIGN KEY ("tipoLancamentoId") REFERENCES "TipoLancamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
