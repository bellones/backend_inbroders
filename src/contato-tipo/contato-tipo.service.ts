import { Injectable } from '@nestjs/common';
import { ContatoTipo } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContatoTipoDto } from './dto/create-contato-tipo.dto';
import { UpdateContatoTipoDto } from './dto/update-contato-tipo.dto';

@Injectable()
export class ContatoTipoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateContatoTipoDto): Promise<boolean> {
    const item = await this.prisma.contatoTipo.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<ContatoTipo[]> {
    return await this.prisma.contatoTipo.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<ContatoTipo> {
    return await this.prisma.contatoTipo.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateContatoTipoDto): Promise<boolean> {
    const item = await this.prisma.contatoTipo.update({
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
    const item = await this.prisma.contatoTipo.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
