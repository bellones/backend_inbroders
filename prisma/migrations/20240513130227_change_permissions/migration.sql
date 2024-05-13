/*
  Warnings:

  - You are about to drop the column `cadastrar` on the `Permissao` table. All the data in the column will be lost.
  - You are about to drop the column `editar` on the `Permissao` table. All the data in the column will be lost.
  - You are about to drop the column `excluir` on the `Permissao` table. All the data in the column will be lost.
  - You are about to drop the column `listar` on the `Permissao` table. All the data in the column will be lost.
  - Added the required column `item` to the `Permissao` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Permissao" DROP COLUMN "cadastrar",
DROP COLUMN "editar",
DROP COLUMN "excluir",
DROP COLUMN "listar",
ADD COLUMN     "item" TEXT NOT NULL;
