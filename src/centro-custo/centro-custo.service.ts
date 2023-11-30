import { Injectable } from '@nestjs/common';
import { CentroCusto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCentroCustoDto } from './dto/create-centro-custo.dto';
import { UpdateCentroCustoDto } from './dto/update-centro-custo.dto';

@Injectable()
export class CentroCustoService {
  constructor(private prisma: PrismaService) {}

  async create(
    createCentroCustoDto: CreateCentroCustoDto,
  ): Promise<CentroCusto> {
    return await this.prisma.centroCusto.create({
      data: createCentroCustoDto,
    });
  }

  async findAll(id: string): Promise<CentroCusto[]> {
    return await this.prisma.centroCusto.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        departamento: true,
      },
    });
  }

  async findOne(id: string): Promise<CentroCusto> {
    return await this.prisma.centroCusto.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: string,
    updateCentroCustoDto: UpdateCentroCustoDto,
  ): Promise<CentroCusto> {
    return await this.prisma.centroCusto.update({
      where: {
        id: id,
      },
      data: updateCentroCustoDto,
    });
  }

  async remove(id: string): Promise<CentroCusto> {
    return await this.prisma.centroCusto.delete({
      where: {
        id: id,
      },
    });
  }
}
