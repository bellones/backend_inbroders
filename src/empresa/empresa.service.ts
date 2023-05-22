import { Injectable } from '@nestjs/common';
import { Empresa } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEmpresaDto): Promise<boolean> {
    const empresa = await this.prisma.empresa.create({
      data: {
        cnpj: dto.cnpj,
        razaoSocial: dto.razaoSocial,
        ativo: dto.ativo,
        dataCadastro: dto.dataCadastro,
        inscricaoEstadual: dto.inscricaoEstadual,
        inscricaoMunicipal: dto.inscricaoMunicipal,
        matriz: dto.matriz,
        nomeFantasia: dto.nomeFantasia,
      },
    });

    return empresa !== null ? true : false;
  }

  async findAll(): Promise<Empresa[]> {
    return await this.prisma.empresa.findMany();
  }

  async findOne(id: string): Promise<Empresa> {
    return await this.prisma.empresa.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateEmpresaDto): Promise<boolean> {
    const empresa = await this.prisma.empresa.update({
      where: {
        id: id,
      },
      data: {
        cnpj: dto.cnpj,
        razaoSocial: dto.razaoSocial,
        ativo: dto.ativo,
        inscricaoEstadual: dto.inscricaoEstadual,
        inscricaoMunicipal: dto.inscricaoMunicipal,
        matriz: dto.matriz,
        nomeFantasia: dto.nomeFantasia,
        dataAtualizado: dto.dataAtualizado,
      },
    });

    return empresa !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const empresa = await this.prisma.empresa.update({
      where: {
        id: id,
      },
      data: {
        ativo: false,
      },
    });

    return empresa !== null ? true : false;
  }
}
