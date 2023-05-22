import { Injectable } from '@nestjs/common';
import { FormaPagamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFormaPagamentoDto } from './dto/create-forma-pagamento.dto';
import { UpdateFormaPagamentoDto } from './dto/update-forma-pagamento.dto';

@Injectable()
export class FormaPagamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateFormaPagamentoDto): Promise<boolean> {
    const item = await this.prisma.formaPagamento.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<FormaPagamento[]> {
    return await this.prisma.formaPagamento.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<FormaPagamento> {
    return await this.prisma.formaPagamento.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateFormaPagamentoDto): Promise<boolean> {
    const item = await this.prisma.formaPagamento.update({
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
    const item = await this.prisma.formaPagamento.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
