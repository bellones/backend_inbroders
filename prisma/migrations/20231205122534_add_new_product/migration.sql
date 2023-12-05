-- CreateTable
CREATE TABLE "NovoProduto" (
    "id" TEXT NOT NULL,
    "idEmpresa" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "sku" TEXT NOT NULL,
    "formato" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "precoVenda" DECIMAL(65,30) NOT NULL,
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "unidadeMedidaId" TEXT NOT NULL,
    "condicao" TEXT NOT NULL,
    "modelo" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "dataValidade" TEXT NOT NULL,
    "depreciacao" TEXT NOT NULL,
    "ncm" TEXT NOT NULL,
    "numSerie" TEXT NOT NULL,

    CONSTRAINT "NovoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NovoProdutoFornecedor" (
    "id" TEXT NOT NULL,
    "pessoaId" TEXT NOT NULL,
    "novoProdutoId" TEXT NOT NULL,

    CONSTRAINT "NovoProdutoFornecedor_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NovoProduto" ADD CONSTRAINT "NovoProduto_idEmpresa_fkey" FOREIGN KEY ("idEmpresa") REFERENCES "Empresa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NovoProduto" ADD CONSTRAINT "NovoProduto_unidadeMedidaId_fkey" FOREIGN KEY ("unidadeMedidaId") REFERENCES "UnidadeMedida"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NovoProdutoFornecedor" ADD CONSTRAINT "NovoProdutoFornecedor_pessoaId_fkey" FOREIGN KEY ("pessoaId") REFERENCES "Pessoa"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NovoProdutoFornecedor" ADD CONSTRAINT "NovoProdutoFornecedor_novoProdutoId_fkey" FOREIGN KEY ("novoProdutoId") REFERENCES "NovoProduto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
