import { Injectable } from '@nestjs/common';
import { TipoLancamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTipoLancamentoDto } from './dto/create-tipo-lancamento.dto';
import { UpdateTipoLancamentoDto } from './dto/update-tipo-lancamento.dto';

@Injectable()
export class TipoLancamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTipoLancamentoDto): Promise<boolean> {
    const item = await this.prisma.tipoLancamento.create({
      data: {
        nome: dto.nome,
        ativo: dto.ativo,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(idEmpresa: string): Promise<TipoLancamento[]> {
    return await this.prisma.tipoLancamento.findMany({
      where: {
        idEmpresa: idEmpresa,
        ativo: true,
      },
    });
  }

  async findOne(id: string): Promise<TipoLancamento> {
    return await this.prisma.tipoLancamento.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateTipoLancamentoDto): Promise<boolean> {
    const item = await this.prisma.tipoLancamento.update({
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
    const item = await this.prisma.tipoLancamento.update({
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
