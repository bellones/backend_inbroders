import { Injectable } from '@nestjs/common';
import { ModeloNegocio } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateModeloNegocioDto } from './dto/create-modelo-negocio.dto';
import { UpdateModeloNegocioDto } from './dto/update-modelo-negocio.dto';

@Injectable()
export class ModeloNegocioService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateModeloNegocioDto): Promise<boolean> {
    const item = await this.prisma.modeloNegocio.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
        custoFixo: dto.custoFixo,
        custoVenda: dto.custoVenda,
        desconto: dto.desconto,
        descricao: dto.descricao,
        imposto: dto.imposto,
        metaFaturamento: dto.metaFaturamento,
        metaLucro: dto.metaFaturamento,
        validade: dto.validade,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<ModeloNegocio[]> {
    return await this.prisma.modeloNegocio.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<ModeloNegocio> {
    return await this.prisma.modeloNegocio.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateModeloNegocioDto): Promise<boolean> {
    const item = await this.prisma.modeloNegocio.update({
      where: {
        id: id,
      },
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
        custoFixo: dto.custoFixo,
        custoVenda: dto.custoVenda,
        desconto: dto.desconto,
        descricao: dto.descricao,
        imposto: dto.imposto,
        metaFaturamento: dto.metaFaturamento,
        metaLucro: dto.metaFaturamento,
        validade: dto.validade,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.modeloNegocio.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
