-- AlterTable
ALTER TABLE "Lancamento" ADD COLUMN     "dataPago" TIMESTAMP(3),
ADD COLUMN     "pago" BOOLEAN NOT NULL DEFAULT false;
