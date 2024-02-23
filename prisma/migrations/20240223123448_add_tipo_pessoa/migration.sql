/*
  Warnings:

  - Added the required column `tipoPessoa` to the `PessoaContaFinanceiro` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PessoaContaFinanceiro" ADD COLUMN     "tipoPessoa" TEXT NOT NULL;
