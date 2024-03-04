-- CreateTable
CREATE TABLE "ContaSaldo" (
    "id" TEXT NOT NULL,
    "contaFinanceiroId" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "lancamentoId" TEXT NOT NULL,
    "tipo" BOOLEAN NOT NULL,

    CONSTRAINT "ContaSaldo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContaSaldo" ADD CONSTRAINT "ContaSaldo_contaFinanceiroId_fkey" FOREIGN KEY ("contaFinanceiroId") REFERENCES "ContaFinanceiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContaSaldo" ADD CONSTRAINT "ContaSaldo_lancamentoId_fkey" FOREIGN KEY ("lancamentoId") REFERENCES "Lancamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
