/*
  Warnings:

  - Added the required column `idEmpresa` to the `SubCategoriaLancamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SubCategoriaLancamento" ADD COLUMN     "idEmpresa" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "SubCategoriaLancamento" ADD CONSTRAINT "SubCategoriaLancamento_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
