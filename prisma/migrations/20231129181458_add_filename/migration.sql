/*
  Warnings:

  - Added the required column `fileName` to the `Arquivo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Arquivo" ADD COLUMN     "fileName" TEXT NOT NULL;
