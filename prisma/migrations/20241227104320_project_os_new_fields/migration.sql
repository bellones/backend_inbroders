/*
  Warnings:

  - Added the required column `descricao` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produtoId` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadeNome` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjetoOS" ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "produtoId" TEXT NOT NULL,
ADD COLUMN     "unidadeNome" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "ProjetoOS" ADD CONSTRAINT "ProjetoOS_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
