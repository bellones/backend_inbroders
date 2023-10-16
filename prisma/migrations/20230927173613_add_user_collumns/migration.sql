/*
  Warnings:

  - Added the required column `usuarioId` to the `ApontamentoArquivo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `ApontamentoComentario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ApontamentoArquivo" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ApontamentoComentario" ADD COLUMN     "usuarioId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ApontamentoComentario" ADD CONSTRAINT "ApontamentoComentario_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ApontamentoArquivo" ADD CONSTRAINT "ApontamentoArquivo_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
