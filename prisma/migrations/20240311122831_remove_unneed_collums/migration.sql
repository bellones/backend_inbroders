/*
  Warnings:

  - You are about to drop the column `orcamentoDeptoItemId` on the `OrcamentoDeptoItem` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "OrcamentoDeptoItem" DROP CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoItemId_fkey";

-- AlterTable
ALTER TABLE "OrcamentoDeptoItem" DROP COLUMN "orcamentoDeptoItemId";
