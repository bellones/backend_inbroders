import { Injectable } from '@nestjs/common';
import { ModeloOrcamentoItem } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateModeloItensOrcamentoCategoria } from './dto/create-modelo-itens-orcamento-categoria.dto';
import { CreateModeloItensOrcamentoList } from './dto/create-modelo-itens-orcamento-list.dto';
import { CreateModeloItensOrcamentoProdutoDto } from './dto/create-modelo-itens-orcamento-produto.dto';
import { CreateModeloItensOrcamentoDto } from './dto/create-modelo-itens-orcamento.dto';
import { UpdateModeloItensOrcamentoDto } from './dto/update-modelo-itens-orcamento.dto';

@Injectable()
export class ModeloItensOrcamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateModeloItensOrcamentoDto): Promise<string> {
    const item = await this.prisma.modeloOrcamentoItem.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });
    return item.id;
  }
  async update(
    id: string,
    dto: UpdateModeloItensOrcamentoDto,
  ): Promise<boolean> {
    const item = await this.prisma.modeloOrcamentoItem.update({
      where: {
        id: id,
      },
      data: {
        nome: dto.nome,
      },
    });

    return item !== null ? true : false;
  }
  async createCategory(
    dto: CreateModeloItensOrcamentoCategoria,
  ): Promise<string> {
    const item = await this.prisma.modeloOrcamentoItemCategoria.create({
      data: {
        descricao: dto.descricao,
        valor: dto.valor,
        modeloOrcamentoItemId: dto.modeloOrcamentoItemId,
      },
    });

    return item.id;
  }
  async createOrcamentoItens(
    dto: CreateModeloItensOrcamentoList,
  ): Promise<boolean> {
    const item = await this.prisma.modeloOrcamentoItemList.create({
      data: {
        quantidade: dto.quantidade,
        valorTotal: dto.valorTotal,
        valorUn: dto.valorUn,
        descricao: dto.descricao,
        modeloOrcamentoItemCategoriaId: dto.modeloOrcamentoItemCategoriaId,
        produtoId: dto.produtoId,
        unidadeMedidaId: dto.unidadeMedidaId,
      },
    });

    return item !== null ? true : false;
  }

  async createProduto(
    dto: CreateModeloItensOrcamentoProdutoDto,
  ): Promise<boolean> {
    const item = await this.prisma.modeloOrcamentoItemProdutoList.create({
      data: dto,
    });

    return item !== null ? true : false;
  }
  async findAll(id: string): Promise<ModeloOrcamentoItem[]> {
    return await this.prisma.modeloOrcamentoItem.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        ModeloOrcamentoItemCategoria: {
          include: {
            ModeloOrcamentoItemList: true,
            ModeloOrcamentoItemProdutoList: true,
          },
        },
      },
      orderBy: {
        id: 'desc',
      },
    });
  }
  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.modeloOrcamentoItem.delete({
      where: {
        id: id,
      },
    });
    return item !== null ? true : false;
  }
  async removeCategory(id: string): Promise<boolean> {
    const item = await this.prisma.modeloOrcamentoItemCategoria.deleteMany({
      where: {
        modeloOrcamentoItemId: id,
      },
    });
    return item !== null ? true : false;
  }
  async removeItens(id: string): Promise<boolean> {
    const item = await this.prisma.modeloOrcamentoItemList.deleteMany({
      where: {
        modeloOrcamentoItemCategoriaId: id,
      },
    });
    return item !== null ? true : false;
  }

  async removeProdutos(id: string): Promise<boolean> {
    const item = await this.prisma.modeloOrcamentoItemProdutoList.deleteMany({
      where: {
        modeloOrcamentoItemCategoriaId: id,
      },
    });
    return item !== null ? true : false;
  }
}
