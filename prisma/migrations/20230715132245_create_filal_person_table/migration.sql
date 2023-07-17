/*
  Warnings:

  - You are about to drop the column `pessoaId` on the `Pessoa` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_pessoaId_fkey";

-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "notaRodapeId" TEXT;

-- AlterTable
ALTER TABLE "Pessoa" DROP COLUMN "pessoaId";

-- CreateTable
CREATE TABLE "PessoaFilial" (
    "id" TEXT NOT NULL,
    "idFilial" TEXT NOT NULL,
    "idPessoa" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,

    CONSTRAINT "PessoaFilial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PessoaFilial" ADD CONSTRAINT "PessoaFilial_idFilial_fkey" FOREIGN KEY ("idFilial") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaFilial" ADD CONSTRAINT "PessoaFilial_idPessoa_fkey" FOREIGN KEY ("idPessoa") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaFilial" ADD CONSTRAINT "PessoaFilial_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_notaRodapeId_fkey" FOREIGN KEY ("notaRodapeId") REFERENCES "NotasRodape"("id") ON DELETE SET NULL ON UPDATE CASCADE;
