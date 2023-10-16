-- CreateTable
CREATE TABLE "ProjetoAprovacao" (
    "id" TEXT NOT NULL,
    "orcamentoId" INTEGER NOT NULL,
    "cabecalhoAprovado" BOOLEAN NOT NULL DEFAULT true,
    "obsCabecalho" TEXT NOT NULL,
    "itensAprovado" BOOLEAN NOT NULL DEFAULT true,
    "obsItens" TEXT NOT NULL,
    "calculoAprovado" BOOLEAN NOT NULL DEFAULT true,
    "obsCalculo" TEXT NOT NULL,

    CONSTRAINT "ProjetoAprovacao_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjetoAprovacao" ADD CONSTRAINT "ProjetoAprovacao_orcamentoId_fkey" FOREIGN KEY ("orcamentoId") REFERENCES "Orcamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
