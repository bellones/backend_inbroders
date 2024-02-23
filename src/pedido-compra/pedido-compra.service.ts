import { Injectable } from '@nestjs/common';
import { PedidoCompra } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CompraPedidoItem } from './dto/create-pedido-compra-item.dto';
import { CreatePedidoCompraServicoDto } from './dto/create-pedido-compra-servico.dto';
import { CreatePedidoCompraDto } from './dto/create-pedido-compra.dto';
import { UpdatePedidoCompraDto } from './dto/update-pedido-compra.dto';

@Injectable()
export class PedidoCompraService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePedidoCompraDto): Promise<PedidoCompra> {
    const item = await this.prisma.pedidoCompra.create({
      data: dto,
    });
    return item;
  }
  async createItem(dto: CompraPedidoItem): Promise<boolean> {
    const item = await this.prisma.pedidoCompraItens.create({
      data: dto,
    });
    return item != null ? true : false;
  }
  async createServico(dto: CreatePedidoCompraServicoDto): Promise<boolean> {
    const item = await this.prisma.pedidoCompraServicoItens.create({
      data: dto,
    });
    return item != null ? true : false;
  }

  async findAll(id: string): Promise<PedidoCompra[]> {
    const item = await this.prisma.pedidoCompra.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        CondicaoPagamento: true,
        responsavel: true,
        pessoa: true,
        PedidoCompraItens: {
          include: {
            novoProduto: true,
            pedidoCompra: true,
            unidade: true,
          },
        },
        centroCusto: true,
        contaFinaceiro: true,
        PedidoCompraServicoItens: {
          include: {
            produto: true,
            unidade: true,
          },
        },
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
    return item;
  }

  async findOne(id: string): Promise<PedidoCompra> {
    const item = await this.prisma.pedidoCompra.findFirst({
      where: {
        idEmpresa: id,
      },
    });
    return item;
  }

  async update(id: string, dto: UpdatePedidoCompraDto): Promise<PedidoCompra> {
    const item = await this.prisma.pedidoCompra.update({
      where: {
        id: id,
      },
      data: dto,
    });
    return item;
  }

  async remove(id: string): Promise<boolean> {
    const itens = await this.prisma.pedidoCompraItens.deleteMany({
      where: {
        pedidoCompraId: id,
      },
    });
    const item = await this.prisma.pedidoCompra.delete({
      where: {
        id: id,
      },
    });
    return item != null ? true : false;
  }
  async removeItem(id: string): Promise<boolean> {
    const item = await this.prisma.pedidoCompraItens.delete({
      where: {
        id: id,
      },
    });
    return item != null ? true : false;
  }
  async removeServico(id: string): Promise<boolean> {
    const item = await this.prisma.pedidoCompraServicoItens.delete({
      where: {
        id: id,
      },
    });
    return item != null ? true : false;
  }
}
