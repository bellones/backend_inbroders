import { Injectable } from '@nestjs/common';
import { Departamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateDepartamentoDto } from './dto/create-departamento.dto';
import { UpdateDepartamentoDto } from './dto/update-departamento.dto';

@Injectable()
export class DepartamentoService {
  constructor(private prisma: PrismaService) {}
  async create(
    createDepartamentoDto: CreateDepartamentoDto,
  ): Promise<Departamento> {
    return await this.prisma.departamento.create({
      data: createDepartamentoDto,
    });
  }

  async findAll(id: string): Promise<Departamento[]> {
    return await this.prisma.departamento.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        CentroCusto: true,
      },
    });
  }

  async findOne(id: string): Promise<Departamento> {
    return await this.prisma.departamento.findFirst({
      where: { id: id },
    });
  }

  async update(
    id: string,
    updateDepartamentoDto: UpdateDepartamentoDto,
  ): Promise<Departamento> {
    const item = await this.prisma.departamento.update({
      data: updateDepartamentoDto,
      where: {
        id: id,
      },
    });
    return item;
  }

  async remove(id: string): Promise<Departamento> {
    const item = await this.prisma.departamento.delete({
      where: {
        id: id,
      },
    });
    return item;
  }
}
