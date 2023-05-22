import { Injectable } from '@nestjs/common';
import { Financeiro } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFinanceiroDto } from './dto/create-financeiro.dto';
import { UpdateFinanceiroDto } from './dto/update-financeiro.dto';

@Injectable()
export class FinanceiroService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateFinanceiroDto): Promise<boolean> {
    const item = await this.prisma.financeiro.create({
      data: {
        dataPagamento: dto.dataPagamento,
        valor: dto.valor,
        vecimentoOriginal: dto.vecimentoOriginal,
        vencimento: dto.vencimento,
        arquivo: dto.arquivo,
        competencia: dto.competencia,
        documento: dto.documento,
        emissao: dto.emissao,
        financeiroCategoriaId: dto.financeiroCategoriaId,
        formaPagamentoId: dto.formaPagamentoId,
        idEmpresa: dto.idEmpresa,
        idPessoa: dto.idPessoa,
        ocorrenciaId: dto.ocorrenciaId,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Financeiro[]> {
    return await this.prisma.financeiro.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<Financeiro> {
    return await this.prisma.financeiro.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateFinanceiroDto): Promise<boolean> {
    const item = await this.prisma.financeiro.update({
      where: {
        id: id,
      },
      data: {
        dataPagamento: dto.dataPagamento,
        valor: dto.valor,
        vecimentoOriginal: dto.vecimentoOriginal,
        vencimento: dto.vencimento,
        arquivo: dto.arquivo,
        competencia: dto.competencia,
        documento: dto.documento,
        emissao: dto.emissao,
        financeiroCategoriaId: dto.financeiroCategoriaId,
        formaPagamentoId: dto.formaPagamentoId,
        idEmpresa: dto.idEmpresa,
        idPessoa: dto.idPessoa,
        ocorrenciaId: dto.ocorrenciaId,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.financeiro.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
