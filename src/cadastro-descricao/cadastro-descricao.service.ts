import { Injectable } from '@nestjs/common';
import { CadastroDescricao } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCadastroDescricaoDto } from './dto/create-cadastro-descricao.dto';
import { UpdateCadastroDescricaoDto } from './dto/update-cadastro-descricao.dto';

@Injectable()
export class CadastroDescricaoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCadastroDescricaoDto): Promise<boolean> {
    const item = await this.prisma.cadastroDescricao.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
        descricao: dto.descricao,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<CadastroDescricao[]> {
    return await this.prisma.cadastroDescricao.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<CadastroDescricao> {
    return await this.prisma.cadastroDescricao.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateCadastroDescricaoDto): Promise<boolean> {
    const item = await this.prisma.cadastroDescricao.update({
      where: {
        id: id,
      },
      data: {
        nome: dto.nome,
        descricao: dto.descricao,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.cadastroDescricao.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
