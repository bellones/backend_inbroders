/*
  Warnings:

  - You are about to drop the column `arquivo` on the `ContasPagarArquivo` table. All the data in the column will be lost.
  - Added the required column `arquivoId` to the `ContasPagarArquivo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ContasPagarArquivo" DROP COLUMN "arquivo",
ADD COLUMN     "arquivoId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Arquivo" (
    "id" TEXT NOT NULL,
    "contentLength" TEXT NOT NULL,
    "contentType" TEXT NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Arquivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContasPagarArquivo" ADD CONSTRAINT "ContasPagarArquivo_arquivoId_fkey" FOREIGN KEY ("arquivoId") REFERENCES "Arquivo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
