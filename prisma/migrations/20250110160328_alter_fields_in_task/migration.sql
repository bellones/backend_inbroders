/*
  Warnings:

  - Changed the type of `dataEstimativa` on the `TaskCard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `dataCriacao` on the `TaskCard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "TaskCard" DROP COLUMN "dataEstimativa",
ADD COLUMN     "dataEstimativa" TIMESTAMP(3) NOT NULL,
DROP COLUMN "dataCriacao",
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL;
