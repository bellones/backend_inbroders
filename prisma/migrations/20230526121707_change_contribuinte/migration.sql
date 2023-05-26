/*
  Warnings:

  - Made the column `contribuinte` on table `Pessoa` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Pessoa" ALTER COLUMN "contribuinte" SET NOT NULL,
ALTER COLUMN "contribuinte" DROP DEFAULT,
ALTER COLUMN "contribuinte" SET DATA TYPE TEXT;
