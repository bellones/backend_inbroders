/*
  Warnings:

  - You are about to drop the column `ocorrenciaId` on the `ContasPagar` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ContasPagar" DROP CONSTRAINT "ContasPagar_ocorrenciaId_fkey";

-- AlterTable
ALTER TABLE "ContasPagar" DROP COLUMN "ocorrenciaId";
