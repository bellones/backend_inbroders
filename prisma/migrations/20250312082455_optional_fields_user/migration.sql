-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "image" TEXT DEFAULT '';

-- AlterTable
ALTER TABLE "UsuarioContato" ALTER COLUMN "nome" SET DEFAULT '',
ALTER COLUMN "cargo" SET DEFAULT '',
ALTER COLUMN "telefone" SET DEFAULT '',
ALTER COLUMN "email" SET DEFAULT '';
