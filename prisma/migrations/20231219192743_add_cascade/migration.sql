-- DropForeignKey
ALTER TABLE "ModeloOrcamentoItemCategoria" DROP CONSTRAINT "ModeloOrcamentoItemCategoria_modeloOrcamentoItemId_fkey";

-- AddForeignKey
ALTER TABLE "ModeloOrcamentoItemCategoria" ADD CONSTRAINT "ModeloOrcamentoItemCategoria_modeloOrcamentoItemId_fkey" FOREIGN KEY ("modeloOrcamentoItemId") REFERENCES "ModeloOrcamentoItem"("id") ON DELETE CASCADE ON UPDATE CASCADE;
