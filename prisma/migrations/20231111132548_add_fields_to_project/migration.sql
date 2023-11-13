-- AlterTable
ALTER TABLE "Projeto" ADD COLUMN     "limiteManejo" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "percentualProdutor" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "reducaoGloblal" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "retornoProdutor" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "taxaEconomia" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "valorEconomia" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "valorManejo" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "valorReduzido" TEXT NOT NULL DEFAULT '0';
