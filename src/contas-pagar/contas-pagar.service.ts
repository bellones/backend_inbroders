import { Injectable } from '@nestjs/common';
import { ContasPagar, ContasPagarArquivo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContasPagarArquivoDto } from './dto/create-contas-pagar-arquivo.dto';
import { CreateContasPagarDto } from './dto/create-contas-pagar.dto';
import { UpdateContasPagarDto } from './dto/update-contas-pagar.dto';

@Injectable()
export class ContasPagarService {
  constructor(private prisma: PrismaService) {}

  async create(
    createContasPagarDto: CreateContasPagarDto,
  ): Promise<ContasPagar> {
    return await this.prisma.contasPagar.create({
      data: createContasPagarDto,
    });
  }

  async createArquivo(
    dto: CreateContasPagarArquivoDto,
  ): Promise<ContasPagarArquivo> {
    return await this.prisma.contasPagarArquivo.create({
      data: dto,
    });
  }

  async findAll(id: string): Promise<ContasPagar[]> {
    return await this.prisma.contasPagar.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        ContasPagarArquivo: true,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.contasPagar.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: string,
    updateContasPagarDto: UpdateContasPagarDto,
  ): Promise<ContasPagar> {
    return await this.prisma.contasPagar.update({
      data: updateContasPagarDto,
      where: {
        id: id,
      },
    });
  }

  async remove(id: string): Promise<ContasPagar> {
    return await this.prisma.contasPagar.delete({
      where: {
        id: id,
      },
    });
  }

  async removeArquivo(id: string): Promise<boolean> {
    const item = await this.prisma.contasPagarArquivo.delete({
      where: {
        id: id,
      },
    });
    return item != null;
  }
}
