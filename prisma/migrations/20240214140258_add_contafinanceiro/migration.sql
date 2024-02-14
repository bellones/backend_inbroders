-- CreateTable
CREATE TABLE "ContaFinanceiro" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "banco" TEXT NOT NULL,
    "agencia" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "validade" TEXT,
    "titular" TEXT NOT NULL,
    "tipoPessoa" TEXT NOT NULL,
    "documento" TEXT NOT NULL,
    "idTipoConta" TEXT NOT NULL,

    CONSTRAINT "ContaFinanceiro_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContaFinanceiro" ADD CONSTRAINT "ContaFinanceiro_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContaFinanceiro" ADD CONSTRAINT "ContaFinanceiro_idTipoConta_fkey" FOREIGN KEY ("idTipoConta") REFERENCES "TipoConta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
