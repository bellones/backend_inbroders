import { Injectable } from '@nestjs/common';
import { Pessoa } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';

@Injectable()
export class PessoaService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreatePessoaDto): Promise<Pessoa> {
    const item = await this.prisma.pessoa.create({
      data: {
        nome: dto.nome,
        idTipo: dto.idTipo,
        contribuinte: dto.contribuinte,
        classificacaoId: dto.classificacao,
        documento: dto.documento,
        inscricaoEstadual: dto.inscricaoEstadual,
        inscricaoMunicipal: dto.inscricaoMunicipal,
        nomeFantasia: dto.nomeFantasia,
        razaoSocial: dto.razaoSocial,
        idEmpresa: dto.idEmpresa,
        pessoaId: dto.pessoaId,
      },
    });
    return item;
  }

  async search(busca: string, idEmpresa: string): Promise<Pessoa[]> {
    return await this.prisma.pessoa.findMany({
      where: {
        ativo: true,
        idEmpresa: idEmpresa,
        nome: {
          contains: busca.toLowerCase(),
          mode: 'insensitive',
        },
      },
    });
  }

  async findAll(id: string): Promise<Pessoa[]> {
    return await this.prisma.pessoa.findMany({
      where: {
        ativo: true,
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.permissao.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdatePessoaDto): Promise<boolean> {
    const item = await this.prisma.pessoa.update({
      where: {
        id: id,
      },
      data: {
        nome: dto.nome,
        idTipo: dto.idTipo,
        contribuinte: dto.contribuinte,
        classificacaoId: dto.classificacao,
        documento: dto.documento,
        inscricaoEstadual: dto.inscricaoEstadual,
        inscricaoMunicipal: dto.inscricaoMunicipal,
        nomeFantasia: dto.nomeFantasia,
        razaoSocial: dto.razaoSocial,
      },
    });
    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.pessoa.update({
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
