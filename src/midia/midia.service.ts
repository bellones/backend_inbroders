import { Injectable } from '@nestjs/common';
import { Midias } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';

@Injectable()
export class MidiaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMidiaDto): Promise<boolean> {
    const item = await this.prisma.midias.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Midias[]> {
    return await this.prisma.midias.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<Midias> {
    return await this.prisma.midias.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateMidiaDto): Promise<boolean> {
    const item = await this.prisma.midias.update({
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
    const item = await this.prisma.midias.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
