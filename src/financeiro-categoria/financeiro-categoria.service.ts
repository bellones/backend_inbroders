import { Injectable } from '@nestjs/common';
import { FinanceiroCategoria } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFinanceiroCategoriaDto } from './dto/create-financeiro-categoria.dto';
import { UpdateFinanceiroCategoriaDto } from './dto/update-financeiro-categoria.dto';

@Injectable()
export class FinanceiroCategoriaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateFinanceiroCategoriaDto): Promise<boolean> {
    const item = await this.prisma.financeiroCategoria.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<FinanceiroCategoria[]> {
    return await this.prisma.financeiroCategoria.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        SubCategoriaLancamento: true,
      },
    });
  }

  async findOne(id: string): Promise<FinanceiroCategoria> {
    return await this.prisma.financeiroCategoria.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: string,
    dto: UpdateFinanceiroCategoriaDto,
  ): Promise<boolean> {
    const item = await this.prisma.financeiroCategoria.update({
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
    const item = await this.prisma.financeiroCategoria.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
