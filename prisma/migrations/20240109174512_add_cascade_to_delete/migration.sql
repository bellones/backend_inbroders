-- DropForeignKey
ALTER TABLE "ContasPagarArquivo" DROP CONSTRAINT "ContasPagarArquivo_arquivoId_fkey";

-- AddForeignKey
ALTER TABLE "ContasPagarArquivo" ADD CONSTRAINT "ContasPagarArquivo_arquivoId_fkey" FOREIGN KEY ("arquivoId") REFERENCES "Arquivo"("id") ON DELETE CASCADE ON UPDATE CASCADE;
