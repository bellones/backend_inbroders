-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "dataEdicao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nomeVersao" TEXT NOT NULL DEFAULT 'Versão Inicial';