import { Injectable } from '@nestjs/common';
import {
  OrcamentoDepto,
  OrcamentoDeptoCategoria,
  OrcamentoDeptoItem,
} from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrcamentoDepartametnoOrcamentoCategoria } from './dto/create-orcament-departamento-category';
import { CreateOrcamentDepartamentoDto } from './dto/create-orcament-departamento.dto';
import { OrcamentoDepartamentoItemDto } from './dto/create-orcamento-deptartamento-item';
import { UpdateOrcamentDepartamentoDto } from './dto/update-orcament-departamento.dto';

@Injectable()
export class OrcamentDepartamentoService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateOrcamentDepartamentoDto): Promise<OrcamentoDepto> {
    const item = await this.prisma.orcamentoDepto.create({
      data: dto,
    });
    return item;
  }
  async createCategory(
    dto: CreateOrcamentoDepartametnoOrcamentoCategoria,
  ): Promise<OrcamentoDeptoCategoria> {
    const item = await this.prisma.orcamentoDeptoCategoria.create({
      data: {
        descricao: dto.descricao,
        valor: dto.valor,
        orcamentoDeptoId: dto.orcamentoDeptoId,
        ordem: dto.ordem,
      },
    });
    return item;
  }
  async createItem(
    dto: OrcamentoDepartamentoItemDto,
  ): Promise<OrcamentoDeptoItem> {
    const item = await this.prisma.orcamentoDeptoItem.create({
      data: {
        descricao: dto.descricao,
        valorTotal: dto.valorTotal,
        orcamentoDeptoCategoriaId: dto.orcamentoDeptoCategoriaId,
        nivel: dto.nivel,
        orcamentoDeptoItemId: dto.orcamentoDeptoItemId,
      },
    });
    return item;
  }

  async findAll(id: string): Promise<OrcamentoDepto[]> {
    return await this.prisma.orcamentoDepto.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        departamento: true,
        usuario: true,
        OrcamentoDeptoCategoria: {
          include: {
            OrcamentoDeptoItem: {
              include: {
                OrcamentoDeptoItem: true,
                orcamentoDeptoItem: true,
              },
            },
          },
        },
      },
    });
  }
  findOne(id: string): Promise<OrcamentoDepto> {
    const item = this.prisma.orcamentoDepto.findFirst({
      where: {
        id: id,
      },
    });
    return item;
  }
  async update(
    id: string,
    dto: UpdateOrcamentDepartamentoDto,
  ): Promise<boolean> {
    const item = await this.prisma.orcamentoDepto.update({
      where: {
        id: id,
      },
      data: dto,
    });
    return item !== null;
  }
  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.orcamentoDepto.delete({
      where: {
        id: id,
      },
    });
    return item !== null;
  }
  async removeCategory(id: string): Promise<boolean> {
    const item = await this.prisma.orcamentoDeptoCategoria.delete({
      where: {
        id: id,
      },
    });
    return item !== null;
  }
  async removeItens(id: string): Promise<boolean> {
    const item = await this.prisma.orcamentoDeptoItem.delete({
      where: {
        id: id,
      },
    });
    return item !== null;
  }
}
