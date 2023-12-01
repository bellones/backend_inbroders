/*
  Warnings:

  - Added the required column `projetoCategoriaId` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjetoOS" ADD COLUMN     "projetoCategoriaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_projetoCategoriaId_fkey" FOREIGN KEY ("projetoCategoriaId") REFERENCES "ProjetoCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;
