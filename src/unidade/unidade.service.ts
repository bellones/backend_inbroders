import { Injectable } from '@nestjs/common';
import { UnidadeMedida } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';

@Injectable()
export class UnidadeService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateUnidadeDto): Promise<boolean> {
    const item = await this.prisma.unidadeMedida.create({
      data: {
        nome: dto.nome,
        ativo: dto.ativo,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(idEmpresa: string): Promise<UnidadeMedida[]> {
    return await this.prisma.unidadeMedida.findMany({
      where: {
        idEmpresa: idEmpresa,
        ativo: true,
      },
    });
  }

  async findOne(id: string): Promise<UnidadeMedida> {
    return await this.prisma.unidadeMedida.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateUnidadeDto): Promise<boolean> {
    const item = await this.prisma.unidadeMedida.update({
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
    const item = await this.prisma.unidadeMedida.update({
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
