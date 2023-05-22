/*
  Warnings:

  - Added the required column `titutlo` to the `Contato` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Contato" ADD COLUMN     "titutlo" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Pessoa" ADD COLUMN     "classificacaoId" TEXT,
ADD COLUMN     "contribuinte" BOOLEAN DEFAULT false,
ADD COLUMN     "dataCadastro" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Classificacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,

    CONSTRAINT "Classificacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Classificacao" ADD CONSTRAINT "Classificacao_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_classificacaoId_fkey" FOREIGN KEY ("classificacaoId") REFERENCES "Classificacao"("id") ON DELETE SET NULL ON UPDATE CASCADE;
