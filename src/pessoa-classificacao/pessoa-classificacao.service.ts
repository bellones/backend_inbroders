import { Injectable } from '@nestjs/common';
import { Classificacao } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePessoaClassificacaoDto } from './dto/create-pessoa-classificacao.dto';
import { UpdatePessoaClassificacaoDto } from './dto/update-pessoa-classificacao.dto';

@Injectable()
export class PessoaClassificacaoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePessoaClassificacaoDto): Promise<boolean> {
    const item = await this.prisma.classificacao.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Classificacao[]> {
    return await this.prisma.classificacao.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<Classificacao> {
    return await this.prisma.classificacao.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(
    id: string,
    dto: UpdatePessoaClassificacaoDto,
  ): Promise<boolean> {
    const item = await this.prisma.classificacao.update({
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
    const item = await this.prisma.classificacao.update({
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
