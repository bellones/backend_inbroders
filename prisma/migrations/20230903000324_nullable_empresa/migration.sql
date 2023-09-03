-- DropForeignKey
ALTER TABLE "Pessoa" DROP CONSTRAINT "Pessoa_idEmpresa_fkey";

-- AlterTable
ALTER TABLE "Pessoa" ALTER COLUMN "idEmpresa" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Pessoa" ADD CONSTRAINT "Pessoa_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE SET NULL ON UPDATE CASCADE;
