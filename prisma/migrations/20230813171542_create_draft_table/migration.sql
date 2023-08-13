-- CreateTable
CREATE TABLE "RascunhoOrcamento" (
    "id" TEXT NOT NULL,
    "usuarioId" TEXT,
    "rascunho" TEXT NOT NULL,

    CONSTRAINT "RascunhoOrcamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "RascunhoOrcamento" ADD CONSTRAINT "RascunhoOrcamento_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;
