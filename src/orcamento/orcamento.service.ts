import { Injectable } from '@nestjs/common';
import { Orcamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';

@Injectable()
export class OrcamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrcamentoDto): Promise<boolean> {
    const item = await this.prisma.orcamento.create({
      data: {
        desconto: dto.desconto,
        descontoTipo: dto.descontoTipo,
        descricao: dto.descricao,
        margem: dto.margem,
        nome: dto.nome,
        valor: dto.valor,
        ativo: true,
        idEmpresa: dto.idEmpresa,
        orcamentoItem: {
          createMany: {
            data: dto.orcamentoItem,
          },
        },
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Orcamento[]> {
    return await this.prisma.orcamento.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        orcamentoItem: true,
        OrcamentoTipo: true,
        Pessoa: true,
      },
    });
  }

  async findOne(id: string): Promise<Orcamento> {
    return await this.prisma.orcamento.findFirst({
      where: {
        id: id,
      },
      include: {
        orcamentoItem: true,
      },
    });
  }

  async update(id: string, dto: UpdateOrcamentoDto): Promise<boolean> {
    const item = await this.prisma.orcamento.update({
      where: {
        id: id,
      },
      data: {
        desconto: dto.desconto,
        descontoTipo: dto.descontoTipo,
        descricao: dto.descricao,
        margem: dto.margem,
        nome: dto.nome,
        valor: dto.valor,
        ativo: true,
        idEmpresa: dto.idEmpresa,
        orcamentoItem: {
          updateMany: {
            where: {
              orcamentoId: dto.id,
            },
            data: dto.orcamentoItem,
          },
        },
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.orcamento.delete({
      where: {
        id: id,
      },
      include: {
        orcamentoItem: true,
      },
    });

    return item !== null ? true : false;
  }
}
