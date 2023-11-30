/*
  Warnings:

  - Added the required column `idEmpresa` to the `CentroCusto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CentroCusto" ADD COLUMN     "idEmpresa" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "CentroCusto" ADD CONSTRAINT "CentroCusto_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
