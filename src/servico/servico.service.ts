import { Injectable } from '@nestjs/common';
import { Servico } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';

@Injectable()
export class ServicoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateServicoDto): Promise<boolean> {
    const item = await this.prisma.servico.create({
      data: {
        nome: dto.nome,
        ativo: dto.ativo,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(idEmpresa: string): Promise<Servico[]> {
    return await this.prisma.servico.findMany({
      where: {
        idEmpresa: idEmpresa,
        ativo: true,
      },
    });
  }

  async findOne(id: string): Promise<Servico> {
    return await this.prisma.servico.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateServicoDto): Promise<boolean> {
    const item = await this.prisma.servico.update({
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
    const item = await this.prisma.servico.update({
      where: {
        id: id,
      },
      data: {
        ativo: false,
      },
    });

    return item !== null ? true : false;
  }
}
