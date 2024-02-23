import { Injectable } from '@nestjs/common';
import { ContasReceber, ContasReceberArquivo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContasReceberArquivoDto } from './dto/create-contas-receber-arquivo.dto';
import { CreateContasReceberDto } from './dto/create-contas-receber.dto';
import { UpdateContasReceberDto } from './dto/update-contas-receber.dto';

@Injectable()
export class ContasReceberService {
  constructor(private prisma: PrismaService) {}

  async create(
    createContasReceberDto: CreateContasReceberDto,
  ): Promise<ContasReceber> {
    const item = await this.prisma.contasReceber.create({
      data: createContasReceberDto,
    });
    return item;
  }

  async createArquivo(
    dto: CreateContasReceberArquivoDto,
  ): Promise<ContasReceberArquivo> {
    const item = await this.prisma.contasReceberArquivo.create({
      data: dto,
    });
    return item;
  }

  async findAll(id: string): Promise<ContasReceber[]> {
    return await this.prisma.contasReceber.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        ContasReceberArquivo: {
          include: {
            arquivo: true,
          },
        },
        cliente: true,
        empresa: true,
        empresaSaida: true,
        tipoConta: true,
        centroCusto: true,
        condicaoPagamento: true,
        contaFinanceiro: true,
        usuario: true,
      },
    });
  }

  async findOne(id: string) {
    const item = await this.prisma.contasReceber.findFirst({
      where: {
        id: id,
      },
    });
    return item;
  }

  async update(
    id: string,
    updateContasReceberDto: UpdateContasReceberDto,
  ): Promise<ContasReceber> {
    const item = await this.prisma.contasReceber.update({
      data: updateContasReceberDto,
      where: {
        id: id,
      },
    });
    return item;
  }

  async remove(id: string): Promise<ContasReceber> {
    const item = await this.prisma.contasReceber.delete({
      where: {
        id: id,
      },
    });
    return item;
  }

  async removeArquivo(id: string): Promise<boolean> {
    const item = await this.prisma.contasReceberArquivo.delete({
      where: {
        id: id,
      },
    });
    return item != null;
  }
}
