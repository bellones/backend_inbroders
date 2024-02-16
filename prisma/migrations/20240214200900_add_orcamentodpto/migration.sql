-- CreateTable
CREATE TABLE "OrcamentoDepto" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "departamentoId" TEXT NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "verba" DECIMAL(65,30) NOT NULL,
    "alocado" DECIMAL(65,30) NOT NULL,
    "disponivel" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrcamentoDepto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrcamentoDeptoItem" (
    "id" TEXT NOT NULL,
    "orcamentoDeptoId" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrcamentoDeptoItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrcamentoDepto" ADD CONSTRAINT "OrcamentoDepto_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDepto" ADD CONSTRAINT "OrcamentoDepto_departamentoId_fkey" FOREIGN KEY ("departamentoId") REFERENCES "Departamento"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoItem" ADD CONSTRAINT "OrcamentoDeptoItem_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
