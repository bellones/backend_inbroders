import { Injectable } from '@nestjs/common';
import { ContaFinanceiro } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContaFinanceiroDto } from './dto/create-conta-financeiro.dto';
import { UpdateContaFinanceiroDto } from './dto/update-conta-financeiro.dto';

@Injectable()
export class ContaFinanceiroService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateContaFinanceiroDto): Promise<ContaFinanceiro> {
    const item = await this.prisma.contaFinanceiro.create({
      data: dto,
    });
    return item;
  }

  async findAll(id: string): Promise<ContaFinanceiro[]> {
    return await this.prisma.contaFinanceiro.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        tipoconta: true,
        empresaSaidaContaFinanceiro: true,
      },
    });
  }

  findOne(id: string): Promise<ContaFinanceiro> {
    const item = this.prisma.contaFinanceiro.findFirst({
      where: {
        id: id,
      },
    });
    return item;
  }

  async update(id: string, dto: UpdateContaFinanceiroDto): Promise<boolean> {
    const item = await this.prisma.contaFinanceiro.update({
      where: {
        id: id,
      },
      data: {
        agencia: dto.agencia,
        banco: dto.banco,
        documento: dto.documento,
        idEmpresa: dto.idEmpresa,
        idTipoConta: dto.idTipoConta,
        numero: dto.numero,
        tipoPessoa: dto.tipoPessoa,
        tipo: dto.tipo,
        titular: dto.titular,
      },
    });
    return item !== null;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.contaFinanceiro.delete({
      where: {
        id: id,
      },
    });
    return item !== null;
  }
}
