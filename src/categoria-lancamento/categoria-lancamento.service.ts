import { Injectable } from '@nestjs/common';
import { CategoriaLancamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaLancamentoDto } from './dto/create-categoria-lancamento.dto';
import { UpdateCategoriaLancamentoDto } from './dto/update-categoria-lancamento.dto';

@Injectable()
export class CategoriaLancamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCategoriaLancamentoDto): Promise<boolean> {
    const item = await this.prisma.categoriaLancamento.create({
      data: {
        nome: dto.nome,
        ativo: dto.ativo,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<CategoriaLancamento[]> {
    return await this.prisma.categoriaLancamento.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<CategoriaLancamento> {
    return await this.prisma.categoriaLancamento.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: string,
    dto: UpdateCategoriaLancamentoDto,
  ): Promise<boolean> {
    const item = await this.prisma.categoriaLancamento.update({
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
    const item = await this.prisma.categoriaLancamento.update({
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
