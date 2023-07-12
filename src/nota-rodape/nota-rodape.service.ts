import { Injectable } from '@nestjs/common';
import { NotasRodape } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotaRodapeDto } from './dto/create-nota-rodape.dto';
import { UpdateNotaRodapeDto } from './dto/update-nota-rodape.dto';

@Injectable()
export class NotaRodapeService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateNotaRodapeDto): Promise<boolean> {
    const item = await this.prisma.notasRodape.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
        descricao: dto.descricao,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<NotasRodape[]> {
    return await this.prisma.notasRodape.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<NotasRodape> {
    return await this.prisma.notasRodape.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateNotaRodapeDto): Promise<boolean> {
    const item = await this.prisma.notasRodape.update({
      where: {
        id: id,
      },
      data: {
        nome: dto.nome,
        descricao: dto.descricao,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.notasRodape.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
