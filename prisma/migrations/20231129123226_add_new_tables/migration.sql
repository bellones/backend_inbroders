-- CreateTable
CREATE TABLE "Departamento" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Departamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CentroCusto" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "departamentoId" TEXT NOT NULL,

    CONSTRAINT "CentroCusto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContasPagar" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "centroCustoId" TEXT NOT NULL,
    "pessoaId" TEXT NOT NULL,
    "vencOriginal" TIMESTAMP(3) NOT NULL,
    "vencimento" TIMESTAMP(3) NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "dataEmissao" TIMESTAMP(3) NOT NULL,
    "numDocumento" TEXT NOT NULL,
    "competencia" TIMESTAMP(3) NOT NULL,
    "historico" TEXT NOT NULL,
    "formaPagamentoId" TEXT NOT NULL,
    "categoriaLancamentoId" TEXT NOT NULL,
    "ocorrenciaId" TEXT NOT NULL,
    "parcelaVencimento" INTEGER NOT NULL,
    "parcela" INTEGER NOT NULL,
    "usuarioId" TEXT NOT NULL,

    CONSTRAINT "ContasPagar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ContasPagarArquivo" (
    "id" TEXT NOT NULL,
    "contasPagarId" TEXT NOT NULL,
    "arquivo" TEXT NOT NULL,

    CONSTRAINT "ContasPagarArquivo_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Departamento" ADD CONSTRAINT "Departamento_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CentroCusto" ADD CONSTRAINT "CentroCusto_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_centroCustoId_fkey" FOREIGN KEY ("centroCustoId") REFERENCES "CentroCusto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_formaPagamentoId_fkey" FOREIGN KEY ("formaPagamentoId") REFERENCES "FormaPagamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_categoriaLancamentoId_fkey" FOREIGN KEY ("categoriaLancamentoId") REFERENCES "CategoriaLancamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_ocorrenciaId_fkey" FOREIGN KEY ("ocorrenciaId") REFERENCES "Ocorrencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagar" ADD CONSTRAINT "ContasPagar_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ContasPagarArquivo" ADD CONSTRAINT "ContasPagarArquivo_contasPagarId_fkey" FOREIGN KEY ("contasPagarId") REFERENCES "ContasPagar"("id") ON DELETE CASCADE ON UPDATE CASCADE;
