/*
  Warnings:

  - Added the required column `tipo` to the `ProjetoOS` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjetoOS" ADD COLUMN     "tipo" TEXT NOT NULL;
