/*
  Warnings:

  - You are about to drop the column `contatoTipoId` on the `Contato` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `Contato` table. All the data in the column will be lost.
  - You are about to drop the column `titulo` on the `Contato` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contato" DROP CONSTRAINT "Contato_contatoTipoId_fkey";

-- AlterTable
ALTER TABLE "Contato" DROP COLUMN "contatoTipoId",
DROP COLUMN "descricao",
DROP COLUMN "titulo",
ADD COLUMN     "cargo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "email" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "nome" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "principal" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "telefone" TEXT NOT NULL DEFAULT '';
