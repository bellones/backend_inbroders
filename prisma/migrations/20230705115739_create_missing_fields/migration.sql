/*
  Warnings:

  - You are about to drop the column `diasPgto` on the `Produto` table. All the data in the column will be lost.
  - You are about to drop the column `idEmpresa` on the `ProdutoUnidade` table. All the data in the column will be lost.
  - Added the required column `diasPgto` to the `ProdutoUnidade` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ProdutoUnidade" DROP CONSTRAINT "ProdutoUnidade_idEmpresa_fkey";

-- AlterTable
ALTER TABLE "Produto" DROP COLUMN "diasPgto";

-- AlterTable
ALTER TABLE "ProdutoUnidade" DROP COLUMN "idEmpresa",
ADD COLUMN     "diasPgto" TEXT NOT NULL,
ADD COLUMN     "empresaId" TEXT;

-- AddForeignKey
ALTER TABLE "ProdutoUnidade" ADD CONSTRAINT "ProdutoUnidade_empresaId_fkey" FOREIGN KEY ("empresaId") REFERENCES "Empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
