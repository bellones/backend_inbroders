/*
  Warnings:

  - You are about to drop the column `qtdTrab` on the `ProjetoOS` table. All the data in the column will be lost.
  - You are about to drop the column `totalExec` on the `ProjetoOS` table. All the data in the column will be lost.
  - You are about to drop the column `totalPago` on the `ProjetoOS` table. All the data in the column will be lost.
  - You are about to drop the column `totalTrab` on the `ProjetoOS` table. All the data in the column will be lost.
  - You are about to drop the column `valorTrab` on the `ProjetoOS` table. All the data in the column will be lost.
  - Added the required column `comercialQtd` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comercialTotal` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `comercialValorUN` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `executado` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pago` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producaoQtd` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producaoTotal` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `producaoValorUn` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trabalhoQtd` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trabalhoTotal` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `trabalhoValorUN` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadeMedidaId` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjetoOS" DROP COLUMN "qtdTrab",
DROP COLUMN "totalExec",
DROP COLUMN "totalPago",
DROP COLUMN "totalTrab",
DROP COLUMN "valorTrab",
ADD COLUMN     "comercialQtd" INTEGER NOT NULL,
ADD COLUMN     "comercialTotal" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "comercialValorUN" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "executado" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "pago" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "producaoQtd" INTEGER NOT NULL,
ADD COLUMN     "producaoTotal" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "producaoValorUn" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "status" TEXT NOT NULL,
ADD COLUMN     "trabalhoQtd" INTEGER NOT NULL,
ADD COLUMN     "trabalhoTotal" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "trabalhoValorUN" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "unidadeMedidaId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
