import { Injectable } from '@nestjs/common';
import { Ocorrencia } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';

@Injectable()
export class OcorrenciaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOcorrenciaDto): Promise<boolean> {
    const item = await this.prisma.ocorrencia.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Ocorrencia[]> {
    return await this.prisma.ocorrencia.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<Ocorrencia> {
    return await this.prisma.ocorrencia.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateOcorrenciaDto): Promise<boolean> {
    const item = await this.prisma.ocorrencia.update({
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
    const item = await this.prisma.ocorrencia.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
