/*
  Warnings:

  - Added the required column `metaReducao` to the `ProjetoCategoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travado` to the `ProjetoCategoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `metaReducao` to the `ProjetoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `travado` to the `ProjetoItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Projeto" ADD COLUMN     "metaEconomia" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT '0';

-- AlterTable
ALTER TABLE "ProjetoCategoria" ADD COLUMN     "metaReducao" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "travado" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "ProjetoItem" ADD COLUMN     "metaReducao" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "travado" BOOLEAN NOT NULL;
