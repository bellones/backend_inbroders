/*
  Warnings:

  - The primary key for the `RascunhoOrcamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `RascunhoOrcamento` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "RascunhoOrcamento" DROP CONSTRAINT "RascunhoOrcamento_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "RascunhoOrcamento_pkey" PRIMARY KEY ("id");
