import { Injectable } from '@nestjs/common';
import { RascunhoOrcamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateRascunhoOrcamentoDto } from './dto/create-rascunho-orcamento.dto';
import { UpdateRascunhoOrcamentoDto } from './dto/update-rascunho-orcamento.dto';

@Injectable()
export class RascunhoOrcamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateRascunhoOrcamentoDto): Promise<string> {
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

  async findOne(id: string): Promise<RascunhoOrcamento> {
    return await this.prisma.rascunhoOrcamento.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateRascunhoOrcamentoDto): Promise<boolean> {
    const item = await this.prisma.rascunhoOrcamento.update({
      where: {
        id: id,
      },
      data: {
        rascunho: dto.rascunho,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.rascunhoOrcamento.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
