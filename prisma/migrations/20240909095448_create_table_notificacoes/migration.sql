-- CreateTable
CREATE TABLE "Notificacoes" (
    "id" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "dado" TEXT NOT NULL,
    "lida" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Notificacoes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Notificacoes" ADD CONSTRAINT "Notificacoes_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
