-- CreateTable
CREATE TABLE "NotasRodape" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,

    CONSTRAINT "NotasRodape_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NotasRodape" ADD CONSTRAINT "NotasRodape_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
