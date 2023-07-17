/*
  Warnings:

  - You are about to drop the column `diarias` on the `Orcamento` table. All the data in the column will be lost.
  - Added the required column `desconto` to the `Orcamento` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total` to the `Orcamento` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orcamento" DROP COLUMN "diarias",
ADD COLUMN     "desconto" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "total" DECIMAL(65,30) NOT NULL;
