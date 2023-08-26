import { Injectable } from '@nestjs/common';
import { Produto, ProdutoUnidade } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoUnidadeDto } from './dto/create-produto-itens.dto';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProdutoDto): Promise<string> {
    const item = await this.prisma.produto.create({
      data: {
        nome: dto.nome,
        ativo: dto.ativo,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item.id;
  }
  async createItens(dto: CreateProdutoUnidadeDto): Promise<boolean> {
    const item = await this.prisma.produtoUnidade.create({
      data: {
        valorMax: dto.valorMax,
        valorMin: dto.valorMin,
        produtoId: dto.idProduto,
        unidadeMedidaId: dto.unidadeMedidaId,
        diasPgto: dto.diasPgto,
        principal: dto.principal,
        condicaoPagamentoId: dto.condicaoPagamentoId,
      },
    });
    return item !== null ? true : false;
  }

  async findAll(idEmpresa: string): Promise<Produto[]> {
    return await this.prisma.produto.findMany({
      where: {
        idEmpresa: idEmpresa,
        ativo: true,
      },
      include: {
        ProdutoUnidade: {
          include: {
            CondicaoPagamento: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findItens(idProduto: string): Promise<ProdutoUnidade[]> {
    return this.prisma.produtoUnidade.findMany({
      where: {
        produtoId: idProduto,
      },
    });
  }

  async findOne(id: string): Promise<Produto> {
    return await this.prisma.produto.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateProdutoDto): Promise<boolean> {
    const item = await this.prisma.produto.update({
      where: {
        id: id,
      },
      data: {
        nome: dto.nome,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.produto.update({
      where: {
        id: id,
      },
      data: {
        ativo: false,
      },
    });

    return item !== null ? true : false;
  }
  async removeItens(id: string): Promise<boolean> {
    const item = await this.prisma.produtoUnidade.deleteMany({
      where: {
        produtoId: id,
      },
    });
    return item !== null ? true : false;
  }
}
