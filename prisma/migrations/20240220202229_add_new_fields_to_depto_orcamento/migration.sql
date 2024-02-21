/*
  Warnings:

  - You are about to drop the column `tipo` on the `OrcamentoDeptoItem` table. All the data in the column will be lost.
  - You are about to drop the column `valor` on the `OrcamentoDeptoItem` table. All the data in the column will be lost.
  - Added the required column `descricao` to the `OrcamentoDepto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `OrcamentoDepto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vigencia` to the `OrcamentoDepto` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produtoId` to the `OrcamentoDeptoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade` to the `OrcamentoDeptoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `unidadeMedidaId` to the `OrcamentoDeptoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorTotal` to the `OrcamentoDeptoItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `valorUn` to the `OrcamentoDeptoItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrcamentoDepto" ADD COLUMN     "descricao" TEXT NOT NULL,
ADD COLUMN     "usuarioId" TEXT NOT NULL,
ADD COLUMN     "vigencia" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "OrcamentoDeptoItem" DROP COLUMN "tipo",
DROP COLUMN "valor",
ADD COLUMN     "produtoId" TEXT NOT NULL,
ADD COLUMN     "quantidade" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "unidadeMedidaId" TEXT NOT NULL,
ADD COLUMN     "valorTotal" DECIMAL(65,30) NOT NULL,
ADD COLUMN     "valorUn" DECIMAL(65,30) NOT NULL;

-- CreateTable
CREATE TABLE "OrcamentoDeptoProduto" (
    "id" TEXT NOT NULL,
    "orcamentoDeptoId" TEXT NOT NULL,
    "novoProdutoId" TEXT NOT NULL,
    "descricao" TEXT,
    "quantidade" DECIMAL(65,30) NOT NULL,
    "valorUn" DECIMAL(65,30) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "OrcamentoDeptoProduto_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "OrcamentoDepto" ADD CONSTRAINT "OrcamentoDepto_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoItem" ADD CONSTRAINT "OrcamentoDeptoItem_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoProduto" ADD CONSTRAINT "OrcamentoDeptoProduto_orcamentoDeptoId_fkey" FOREIGN KEY ("orcamentoDeptoId") REFERENCES "OrcamentoDepto"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrcamentoDeptoProduto" ADD CONSTRAINT "OrcamentoDeptoProduto_novoProdutoId_fkey" FOREIGN KEY ("novoProdutoId") REFERENCES "NovoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
