-- CreateTable
CREATE TABLE "ProjetoCidade" (
    "id" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "diarias" INTEGER NOT NULL,

    CONSTRAINT "ProjetoCidade_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjetoCidade" ADD CONSTRAINT "ProjetoCidade_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
