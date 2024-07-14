/*
  Warnings:

  - You are about to drop the column `telefone` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "telefone",
ADD COLUMN     "codigo" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "cpf" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "ctps" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "dataAdmissao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nascimento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "pispasep" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "rg" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "salario" DECIMAL(65,30) NOT NULL DEFAULT 0.0;

-- CreateTable
CREATE TABLE "UsuarioEndereco" (
    "id" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "local" TEXT NOT NULL,
    "numero" TEXT NOT NULL,
    "bairro" TEXT NOT NULL,
    "complemento" TEXT,
    "observacao" TEXT,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "ativo" BOOLEAN DEFAULT true,
    "principal" BOOLEAN DEFAULT false,

    CONSTRAINT "UsuarioEndereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsuarioContato" (
    "id" TEXT NOT NULL,
    "idUsuario" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "UsuarioContato_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UsuarioEndereco" ADD CONSTRAINT "UsuarioEndereco_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsuarioContato" ADD CONSTRAINT "UsuarioContato_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
