/*
  Warnings:

  - Added the required column `porcentagemManejo` to the `ProjetoCategoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `porcentagemReducao` to the `ProjetoCategoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorManejo` to the `ProjetoCategoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorReducao` to the `ProjetoCategoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `porcentagemManejo` to the `ProjetoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `porcentagemReducao` to the `ProjetoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorManejo` to the `ProjetoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorReducao` to the `ProjetoItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjetoCategoria" ADD COLUMN     "porcentagemManejo" TEXT NOT NULL,
ADD COLUMN     "porcentagemReducao" TEXT NOT NULL,
ADD COLUMN     "valorManejo" TEXT NOT NULL,
ADD COLUMN     "valorReducao" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "ProjetoItem" ADD COLUMN     "porcentagemManejo" TEXT NOT NULL,
ADD COLUMN     "porcentagemReducao" TEXT NOT NULL,
ADD COLUMN     "valorManejo" TEXT NOT NULL,
ADD COLUMN     "valorReducao" TEXT NOT NULL;
