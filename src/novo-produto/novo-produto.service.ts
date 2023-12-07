import { Injectable } from '@nestjs/common';
import { NovoProduto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNovoProdutoFornecedorDto } from './dto/create-novo-produto-fornecedor.dto';
import { CreateNovoProdutoDto } from './dto/create-novo-produto.dto';
import { UpdateNovoProdutoDto } from './dto/update-novo-produto.dto';

@Injectable()
export class NovoProdutoService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateNovoProdutoDto): Promise<NovoProduto> {
    const item = await this.prisma.novoProduto.create({
      data: dto,
    });
    return item;
  }
  async createFornecedor(
    dto: CreateNovoProdutoFornecedorDto,
  ): Promise<boolean> {
    const item = await this.prisma.novoProdutoFornecedor.create({
      data: dto,
    });
    return item != null ? true : false;
  }

  async findAll(id: string): Promise<NovoProduto[]> {
    const item = await this.prisma.novoProduto.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        NovoProdutoFornecedor: true,
        unidade: true,
      },
    });
    return item;
  }

  async findOne(id: string): Promise<NovoProduto> {
    const item = await this.prisma.novoProduto.findFirst({
      where: {
        idEmpresa: id,
      },
    });
    return item;
  }

  async update(id: string, dto: UpdateNovoProdutoDto): Promise<NovoProduto> {
    const item = await this.prisma.novoProduto.update({
      where: {
        id: id,
      },
      data: dto,
    });
    return item;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.novoProduto.update({
      where: {
        id: id,
      },
      data: {
        ativo: false,
      },
    });
    return item != null ? true : false;
  }
  async removeFornecedor(id: string): Promise<boolean> {
    const item = await this.prisma.novoProdutoFornecedor.delete({
      where: {
        id: id,
      },
    });
    return item != null ? true : false;
  }
}
