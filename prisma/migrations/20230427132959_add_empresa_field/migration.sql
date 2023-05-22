/*
  Warnings:

  - Added the required column `idEmpresa` to the `ContatoTipo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idEmpresa` to the `Tipo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idEmpresa` to the `TipoConta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContatoTipo" ADD COLUMN     "idEmpresa" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Tipo" ADD COLUMN     "idEmpresa" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TipoConta" ADD COLUMN     "idEmpresa" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tipo" ADD CONSTRAINT "Tipo_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContatoTipo" ADD CONSTRAINT "ContatoTipo_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TipoConta" ADD CONSTRAINT "TipoConta_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
