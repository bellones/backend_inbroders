-- DropForeignKey
ALTER TABLE "OrcamentoDepto" DROP CONSTRAINT "OrcamentoDepto_departamentoId_fkey";

-- DropForeignKey
ALTER TABLE "OrcamentoDeptoItem" DROP CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoId_fkey";

-- AddForeignKey
ALTER TABLE "OrcamentoDepto" ADD CONSTRAINT "OrcamentoDepto_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoItem" ADD CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
