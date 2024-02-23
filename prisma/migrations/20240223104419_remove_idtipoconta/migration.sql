/*
  Warnings:

  - You are about to drop the column `idTipoConta` on the `PessoaContaFinanceiro` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "PessoaContaFinanceiro" DROP CONSTRAINT "PessoaContaFinanceiro_idTipoConta_fkey";

-- AlterTable
ALTER TABLE "PessoaContaFinanceiro" DROP COLUMN "idTipoConta";
