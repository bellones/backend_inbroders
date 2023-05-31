import { Injectable } from '@nestjs/common';
import { OrcamentoTipo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrcamentoTipoDto } from './dto/create-orcamento-tipo.dto';
import { UpdateOrcamentoTipoDto } from './dto/update-orcamento-tipo.dto';

@Injectable()
export class OrcamentoTipoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrcamentoTipoDto): Promise<boolean> {
    const item = await this.prisma.orcamentoTipo.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<OrcamentoTipo[]> {
    return await this.prisma.orcamentoTipo.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<OrcamentoTipo> {
    return await this.prisma.orcamentoTipo.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateOrcamentoTipoDto): Promise<boolean> {
    const item = await this.prisma.orcamentoTipo.update({
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
    const item = await this.prisma.orcamentoTipo.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
