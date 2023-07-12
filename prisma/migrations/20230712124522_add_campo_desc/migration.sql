/*
  Warnings:

  - Added the required column `descricao` to the `NotasRodape` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "NotasRodape" ADD COLUMN     "descricao" TEXT NOT NULL;
