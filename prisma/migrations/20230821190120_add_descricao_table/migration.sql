-- AlterTable
ALTER TABLE "Orcamento" ADD COLUMN     "cadastroDescricaoId" TEXT;

-- CreateTable
CREATE TABLE "CadastroDescricao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,

    CONSTRAINT "CadastroDescricao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Orcamento" ADD CONSTRAINT "Orcamento_cadastroDescricaoId_fkey" FOREIGN KEY ("cadastroDescricaoId") REFERENCES "CadastroDescricao"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CadastroDescricao" ADD CONSTRAINT "CadastroDescricao_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
