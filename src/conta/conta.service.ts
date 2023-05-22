import { Injectable } from '@nestjs/common';
import { Conta } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';

@Injectable()
export class ContaService {
  constructor(private prisma: PrismaService) {}
  async create(dto: CreateContaDto): Promise<boolean> {
    const item = await this.prisma.conta.create({
      data: {
        agencia: dto.agencia,
        banco: dto.banco,
        conta: dto.conta,
        ativo: dto.ativo,
        idEmpresa: dto.idEmpresa,
        idTipoConta: dto.idTipoConta,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<Conta[]> {
    return await this.prisma.conta.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<Conta> {
    return await this.prisma.conta.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateContaDto): Promise<boolean> {
    const item = await this.prisma.conta.update({
      where: {
        id: id,
      },
      data: {
        agencia: dto.agencia,
        banco: dto.banco,
        conta: dto.conta,
        ativo: dto.ativo,
        idEmpresa: dto.idEmpresa,
        idTipoConta: dto.idTipoConta,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.conta.update({
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
