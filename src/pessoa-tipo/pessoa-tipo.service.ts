import { Injectable } from '@nestjs/common';
import { Tipo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePessoaTipoDto } from './dto/create-pessoa-tipo.dto';
import { UpdatePessoaTipoDto } from './dto/update-pessoa-tipo.dto';

@Injectable()
export class PessoaTipoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreatePessoaTipoDto): Promise<boolean> {
    const item = await this.prisma.tipo.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Tipo[]> {
    return await this.prisma.tipo.findMany({
      where: {
        idEmpresa: id,
        ativo: true,
      },
    });
  }

  async findOne(id: string): Promise<Tipo> {
    return await this.prisma.tipo.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdatePessoaTipoDto): Promise<boolean> {
    const item = await this.prisma.tipo.update({
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
    const item = await this.prisma.tipo.update({
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
