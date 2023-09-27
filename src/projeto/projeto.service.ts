import { Injectable } from '@nestjs/common';
import { Projeto } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjetoAprovadorDto } from './dto/create-projeto-aprovador.dto';
import { ProjetoArquivoDto } from './dto/create-projeto-arquivo.dto';
import { ProjetoCategoriaDto } from './dto/create-projeto-categoria.dto';
import { ProjetoContatoDto } from './dto/create-projeto-contato.dto';
import { ProjetoItemDto } from './dto/create-projeto-item.dto';
import { ProjetoPessoDto } from './dto/create-projeto-pessoa.dto';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';

@Injectable()
export class ProjetoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProjetoDto): Promise<Projeto> {
    const item = await this.prisma.projeto.create({
      data: dto,
    });
    return item;
  }
  async createCategoria(dto: ProjetoCategoriaDto): Promise<string> {
    const item = await this.prisma.projetoCategoria.create({
      data: dto,
    });
    return item.id;
  }
  async createItem(dto: ProjetoItemDto): Promise<boolean> {
    const item = await this.prisma.projetoItem.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createAprovador(dto: ProjetoAprovadorDto): Promise<boolean> {
    const item = await this.prisma.projetoAprovador.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createProjetoPessoa(dto: ProjetoPessoDto): Promise<boolean> {
    const item = await this.prisma.projetoPessoa.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createProjetoContato(dto: ProjetoContatoDto): Promise<boolean> {
    const item = await this.prisma.projetoContato.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createProjetoArquivo(dto: ProjetoArquivoDto): Promise<boolean> {
    const item = await this.prisma.projetoArquivos.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async findAll(idEmpresa: string): Promise<Projeto[]> {
    return await this.prisma.projeto.findMany({
      where: {
        idEmpresa: idEmpresa,
      },
      include: {
        ProjetoCategoria: {
          include: {
            ProjetoItem: {
              include: {
                produto: true,
                unidade: true,
                Usuario: true,
              },
            },
          },
        },
        ProjetoAprovador: true,
        ProjetoContato: true,
        ProjetoArquivos: true,
        ProjetoPessoa: true,
      },
    });
  }

  async findOne(id: number): Promise<Projeto> {
    return await this.prisma.projeto.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, dto: UpdateProjetoDto): Promise<Projeto> {
    const item = await this.prisma.projeto.update({
      where: {
        id: dto.id,
      },
      data: dto,
    });
    return item;
  }

  async remove(id: number): Promise<Projeto> {
    return await this.prisma.projeto.delete({
      where: {
        id: id,
      },
    });
  }
}
