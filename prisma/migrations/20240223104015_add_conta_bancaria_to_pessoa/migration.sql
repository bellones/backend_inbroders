-- CreateTable
CREATE TABLE "PessoaContaFinanceiro" (
    "id" TEXT NOT NULL,
    "banco" TEXT NOT NULL,
    "agencia" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "validade" TEXT,
    "descricao" TEXT NOT NULL DEFAULT 'Conta padrão',
    "titular" TEXT NOT NULL,
    "tipoPessoa" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "obs" TEXT NOT NULL,
    "idTipoConta" TEXT NOT NULL,
    "pessoaId" TEXT NOT NULL,

    CONSTRAINT "PessoaContaFinanceiro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PessoaContaFinanceiro" ADD CONSTRAINT "PessoaContaFinanceiro_idTipoConta_fkey" FOREIGN KEY ("idTipoConta") REFERENCES "TipoConta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PessoaContaFinanceiro" ADD CONSTRAINT "PessoaContaFinanceiro_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
