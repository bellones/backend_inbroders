import { Injectable } from '@nestjs/common';
import { Entregavel } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEntregavelDto } from './dto/create-entregavel.dto';
import { UpdateEntregavelDto } from './dto/update-entregavel.dto';

@Injectable()
export class EntregavelService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEntregavelDto): Promise<boolean> {
    const item = await this.prisma.entregavel.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Entregavel[]> {
    return await this.prisma.entregavel.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<Entregavel> {
    return await this.prisma.entregavel.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateEntregavelDto): Promise<boolean> {
    const item = await this.prisma.entregavel.update({
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
    const item = await this.prisma.entregavel.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
