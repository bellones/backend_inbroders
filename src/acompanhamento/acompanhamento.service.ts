import { Injectable } from '@nestjs/common';
import { Acompanhamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AcompanhamentoCategoriaDto } from './dto/create-acompanhamento-categoria.dto';
import { AcompanhamentoItemDto } from './dto/create-acompanhamento-item.dto';
import { CreateAcompanhamentoDto } from './dto/create-acompanhamento.dto';
import { ApontamentoArquivo } from './dto/create-apontamento-arquivo.dt';
import { ApontamentoComentario } from './dto/create-apontamento-comentario.dto';
import { CreateApontamento } from './dto/create-apontamento.dto';
import { UpdateAcompanhamentoDto } from './dto/update-acompanhamento.dto';

@Injectable()
export class AcompanhamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateAcompanhamentoDto): Promise<Acompanhamento> {
    const item = await this.prisma.acompanhamento.create({
      data: {
        dataFim: dto.dataFim,
        dataInicio: dto.dataInicio,
        horas: dto.horas,
        projetoId: dto.projetoId,
      },
    });
    return item;
  }

  async createCategoria(dto: AcompanhamentoCategoriaDto): Promise<string> {
    const item = await this.prisma.acompanhamentoCategoria.create({
      data: dto,
    });
    return item.id;
  }
  async createItem(dto: AcompanhamentoItemDto): Promise<boolean> {
    const item = await this.prisma.acompanhamentoItem.create({
      data: dto,
    });
    return item !== null ? true : false;
  }
  async createApontamento(dto: CreateApontamento): Promise<boolean> {
    const item = await this.prisma.apontamento.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createApontamentoComentario(
    dto: ApontamentoComentario,
  ): Promise<boolean> {
    const item = await this.prisma.apontamentoComentario.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createApontamentoArquivo(dto: ApontamentoArquivo): Promise<boolean> {
    const item = await this.prisma.apontamentoArquivo.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async findAll(projetoId: number): Promise<Acompanhamento[]> {
    return await this.prisma.acompanhamento.findMany({
      where: {
        projetoId: projetoId,
      },
      include: {
        AcompanhamentoCategoria: {
          include: {
            AcompanhamentoItem: {
              include: {
                Apontamento: {
                  include: {
                    ApontamentoArquivo: true,
                    ApontamentoComentario: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<Acompanhamento> {
    return await this.prisma.acompanhamento.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: number,
    dto: UpdateAcompanhamentoDto,
  ): Promise<Acompanhamento> {
    const item = await this.prisma.acompanhamento.update({
      where: {
        id: dto.id,
      },
      data: {
        dataFim: dto.dataFim,
        dataInicio: dto.dataInicio,
        horas: dto.horas,
        projetoId: dto.projetoId,
      },
    });
    return item;
  }

  async remove(id: string): Promise<Acompanhamento> {
    return await this.prisma.acompanhamento.delete({
      where: {
        id: id,
      },
    });
  }
}
