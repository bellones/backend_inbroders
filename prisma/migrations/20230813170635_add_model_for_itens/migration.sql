-- CreateTable
CREATE TABLE "ModeloOrcamentoItem" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "ModeloOrcamentoItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModeloOrcamentoItemCategoria" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor" DECIMAL(65,30) NOT NULL,
    "modeloOrcamentoItemId" TEXT NOT NULL,

    CONSTRAINT "ModeloOrcamentoItemCategoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ModeloOrcamentoItemList" (
    "id" TEXT NOT NULL,
    "modeloOrcamentoItemCategoriaId" TEXT NOT NULL,
    "produtoId" TEXT NOT NULL,
    "descricao" TEXT,
    "unidadeMedidaId" TEXT,
    "quantidade" DECIMAL(65,30) NOT NULL,
    "valorUn" DECIMAL(65,30) NOT NULL,
    "valorTotal" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "ModeloOrcamentoItemList_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ModeloOrcamentoItem" ADD CONSTRAINT "ModeloOrcamentoItem_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModeloOrcamentoItemCategoria" ADD CONSTRAINT "ModeloOrcamentoItemCategoria_modeloOrcamentoItemId_fkey" FOREIGN KEY ("modeloOrcamentoItemId") REFERENCES "ModeloOrcamentoItem"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModeloOrcamentoItemList" ADD CONSTRAINT "ModeloOrcamentoItemList_modeloOrcamentoItemCategoriaId_fkey" FOREIGN KEY ("modeloOrcamentoItemCategoriaId") REFERENCES "ModeloOrcamentoItemCategoria"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModeloOrcamentoItemList" ADD CONSTRAINT "ModeloOrcamentoItemList_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ModeloOrcamentoItemList" ADD CONSTRAINT "ModeloOrcamentoItemList_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE SET NULL ON UPDATE CASCADE;
