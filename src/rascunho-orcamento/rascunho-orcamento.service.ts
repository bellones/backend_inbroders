import { Injectable } from '@nestjs/common';
import { RascunhoOrcamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRascunhoOrcamentoDto } from './dto/create-rascunho-orcamento.dto';
import { UpdateRascunhoOrcamentoDto } from './dto/update-rascunho-orcamento.dto';

@Injectable()
export class RascunhoOrcamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRascunhoOrcamentoDto): Promise<number> {
    const item = await this.prisma.rascunhoOrcamento.create({
      data: {
        rascunho: dto.rascunho,
        usuarioId: dto.usuarioId,
      },
    });

    return item.id;
  }

  async findAll(idUsuario: string): Promise<RascunhoOrcamento[]> {
    return await this.prisma.rascunhoOrcamento.findMany({
      where: {
        usuarioId: idUsuario,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findOne(id: number): Promise<RascunhoOrcamento> {
    return await this.prisma.rascunhoOrcamento.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, dto: UpdateRascunhoOrcamentoDto): Promise<boolean> {
    const item = await this.prisma.rascunhoOrcamento.update({
      where: {
        id: Number(id),
      },
      data: {
        rascunho: dto.rascunho,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: number): Promise<boolean> {
    const item = await this.prisma.rascunhoOrcamento.delete({
      where: {
        id: Number(id),
      },
    });

    return item !== null ? true : false;
  }
}
