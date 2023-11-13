-- DropForeignKey
ALTER TABLE "ProjetoCategoria" DROP CONSTRAINT "ProjetoCategoria_projetoId_fkey";

-- DropForeignKey
ALTER TABLE "ProjetoItem" DROP CONSTRAINT "ProjetoItem_projetoCategoriaId_fkey";

-- AddForeignKey
ALTER TABLE "ProjetoCategoria" ADD CONSTRAINT "ProjetoCategoria_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjetoItem" ADD CONSTRAINT "ProjetoItem_projetoCategoriaId_fkey" FOREIGN KEY ("projetoCategoriaId") REFERENCES "ProjetoCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
