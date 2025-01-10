-- CreateTable
CREATE TABLE "TaskCard" (
    "id" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "projetoId" INTEGER NOT NULL,
    "dataEstimativa" TEXT NOT NULL,
    "dataCriacao" TEXT NOT NULL,
    "userCriadorId" TEXT NOT NULL,
    "userResponsavelId" TEXT NOT NULL,

    CONSTRAINT "TaskCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TaskCard" ADD CONSTRAINT "TaskCard_projetoId_fkey" FOREIGN KEY ("projetoId") REFERENCES "Projeto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskCard" ADD CONSTRAINT "TaskCard_userCriadorId_fkey" FOREIGN KEY ("userCriadorId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TaskCard" ADD CONSTRAINT "TaskCard_userResponsavelId_fkey" FOREIGN KEY ("userResponsavelId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
