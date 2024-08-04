-- AlterTable
ALTER TABLE "Empresa" ADD COLUMN     "atividadePrincipal" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "cnae" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "comercio" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "ecommerce" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "faturamentoUltimoAno" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "industria" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "quantidadeFuncionarios" DECIMAL(65,30) NOT NULL DEFAULT 0,
ADD COLUMN     "regimeTributario" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "servicos" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "tamanhoEmpresa" TEXT NOT NULL DEFAULT '';

-- CreateTable
CREATE TABLE "ContatoEmpresa" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "principal" BOOLEAN NOT NULL DEFAULT false,
    "ativo" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ContatoEmpresa_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ContatoEmpresa" ADD CONSTRAINT "ContatoEmpresa_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
