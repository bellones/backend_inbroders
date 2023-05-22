/*
  Warnings:

  - You are about to drop the column `idTipo` on the `Contato` table. All the data in the column will be lost.
  - You are about to drop the column `titutlo` on the `Contato` table. All the data in the column will be lost.
  - Added the required column `titulo` to the `Contato` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Contato" DROP CONSTRAINT "Contato_idTipo_fkey";

-- DropIndex
DROP INDEX "Contato_descricao_idx";

-- AlterTable
ALTER TABLE "Contato" DROP COLUMN "idTipo",
DROP COLUMN "titutlo",
ADD COLUMN     "contatoTipoId" TEXT,
ADD COLUMN     "titulo" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Contato" ADD CONSTRAINT "Contato_contatoTipoId_fkey" FOREIGN KEY ("contatoTipoId") REFERENCES "ContatoTipo"("id") ON DELETE SET NULL ON UPDATE CASCADE;
