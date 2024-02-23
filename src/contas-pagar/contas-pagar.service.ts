import { Injectable } from '@nestjs/common';
import { ContasPagar, ContasPagarArquivo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContasPagarArquivoDto } from './dto/create-contas-pagar-arquivo.dto';
import { CreateContasPagarDto } from './dto/create-contas-pagar.dto';
import { UpdateContasPagarDto } from './dto/update-contas-pagar.dto';

@Injectable()
export class ContasPagarService {
  constructor(private prisma: PrismaService) {}

  async create(
    createContasPagarDto: CreateContasPagarDto,
  ): Promise<ContasPagar> {
    const item = await this.prisma.contasPagar.create({
      data: createContasPagarDto,
    });
    return item;
  }

  async createArquivo(
    dto: CreateContasPagarArquivoDto,
  ): Promise<ContasPagarArquivo> {
    const item = await this.prisma.contasPagarArquivo.create({
      data: dto,
    });
    return item;
  }

  async findAll(id: string): Promise<ContasPagar[]> {
    return await this.prisma.contasPagar.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        ContasPagarArquivo: {
          include: {
            arquivo: true,
          },
        },
        FinanceiroCategoria: {
          include: {
            SubCategoriaLancamento: true,
          },
        },
        centroCusto: true,
        empresa: true,
        CondicaoPagamento: true,
        pessoa: true,
        usuario: true,
        contaFinanceiro: true,
        SubCategoriaLancamento: true,
        orcamentoDepto: {
          include: {
            OrcamentoDeptoCategoria: {
              include: {
                OrcamentoDeptoItem: {
                  include: {
                    produto: true,
                  },
                },
                OrcamentoDeptoProduto: {
                  include: {
                    NovoProduto: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const item = await this.prisma.contasPagar.findFirst({
      where: {
        id: id,
      },
    });
    return item;
  }

  async update(
    id: string,
    updateContasPagarDto: UpdateContasPagarDto,
  ): Promise<ContasPagar> {
    const item = await this.prisma.contasPagar.update({
      data: updateContasPagarDto,
      where: {
        id: id,
      },
    });
    return item;
  }

  async remove(id: string): Promise<ContasPagar> {
    const item = await this.prisma.contasPagar.delete({
      where: {
        id: id,
      },
    });
    return item;
  }

  async removeArquivo(id: string): Promise<boolean> {
    const item = await this.prisma.contasPagarArquivo.delete({
      where: {
        id: id,
      },
    });
    return item != null;
  }
}
