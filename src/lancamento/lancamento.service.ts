import { Injectable } from '@nestjs/common';
import { Lancamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLancamentoDto } from './dto/create-lancamento.dto';
import { UpdateLancamentoDto } from './dto/update-lancamento.dto';

@Injectable()
export class LancamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateLancamentoDto): Promise<boolean> {
    const item = await this.prisma.lancamento.create({
      data: {
        competencia: dto.competencia,
        data: dto.data,
        tipo: dto.tipo,
        valor: dto.valor,
        categoriaLancamentoId: dto.categoriaLancamentoId,
        contaId: dto.contaId,
        contaPagarId: dto.contaPagarId,
        contaReceberId: dto.contaReceberId,
        idCategoria: dto.idCategoria,
        idEmpresa: dto.idEmpresa,
        subCategoriaLancamentoId: dto.subCategoriaLancamentoId,
        idPessoa: dto.idPessoa,
        texto: dto.texto,
        tipoLancamentoId: dto.tipoLancamentoId,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Lancamento[]> {
    return await this.prisma.lancamento.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<Lancamento> {
    return await this.prisma.lancamento.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateLancamentoDto): Promise<boolean> {
    const item = await this.prisma.lancamento.update({
      where: {
        id: id,
      },
      data: dto,
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.lancamento.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
