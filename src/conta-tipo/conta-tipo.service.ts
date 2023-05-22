import { Injectable } from '@nestjs/common';
import { TipoConta } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContaTipoDto } from './dto/create-conta-tipo.dto';
import { UpdateContaTipoDto } from './dto/update-conta-tipo.dto';

@Injectable()
export class ContaTipoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateContaTipoDto): Promise<boolean> {
    const item = await this.prisma.tipoConta.create({
      data: {
        descricao: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<TipoConta[]> {
    return await this.prisma.tipoConta.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<TipoConta> {
    return await this.prisma.tipoConta.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateContaTipoDto): Promise<boolean> {
    const item = await this.prisma.tipoConta.update({
      where: {
        id: id,
      },
      data: {
        descricao: dto.nome,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.tipoConta.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
