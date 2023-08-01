-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "tipoAcrescimo" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "tipoComissao" TEXT NOT NULL DEFAULT '0',
ADD COLUMN     "tipoDesconto" TEXT NOT NULL DEFAULT '0';
