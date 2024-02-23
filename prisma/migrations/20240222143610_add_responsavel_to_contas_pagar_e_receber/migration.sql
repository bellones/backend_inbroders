/*
  Warnings:

  - Added the required column `usuarioId` to the `ContasReceber` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContasReceber" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ContasReceber" ADD CONSTRAINT "ContasReceber_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
