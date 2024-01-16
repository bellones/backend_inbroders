import { Injectable } from '@nestjs/common';
import { SubCategoriaLancamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFinanceSubCategoryDto } from './dto/create-finance_sub_category.dto';
import { UpdateFinanceSubCategoryDto } from './dto/update-finance_sub_category.dto';

@Injectable()
export class FinanceSubCategoryService {
  constructor(private prisma: PrismaService) {}

  async create(
    dto: CreateFinanceSubCategoryDto,
  ): Promise<SubCategoriaLancamento> {
    const item = await this.prisma.subCategoriaLancamento.create({
      data: dto,
    });
    return item;
  }

  async findAll(id: string): Promise<SubCategoriaLancamento[]> {
    return this.prisma.subCategoriaLancamento.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        FinanceiroCategoria: true,
      },
    });
  }

  async findOne(id: string): Promise<SubCategoriaLancamento> {
    const item = await this.prisma.subCategoriaLancamento.findFirst({
      where: { id: id },
    });
    return item;
  }

  async update(
    id: string,
    dto: UpdateFinanceSubCategoryDto,
  ): Promise<SubCategoriaLancamento> {
    const item = await this.prisma.subCategoriaLancamento.update({
      where: { id: id },
      data: dto,
    });
    return item;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.subCategoriaLancamento.update({
      where: { id: id },
      data: { ativo: false },
    });
    return item ? true : false;
  }
}
