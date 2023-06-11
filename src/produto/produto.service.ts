import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

@Injectable()
export class ProdutoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProdutoDto): Promise<boolean> {
    const item = await this.prisma.servico.create({
      data: {
        nome: dto.nome,
        ativo: dto.ativo,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(idEmpresa: string): Promise<Produto[]> {
    return await this.prisma.servico.findMany({
      where: {
        idEmpresa: idEmpresa,
        ativo: true,
      },
    });
  }

  async findOne(id: string): Promise<Produto> {
    return await this.prisma.servico.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateProdutoDto): Promise<boolean> {
    const item = await this.prisma.servico.update({
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
    const item = await this.prisma.servico.update({
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
