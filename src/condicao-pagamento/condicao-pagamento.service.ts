import { Injectable } from '@nestjs/common';
import { CondicaoPagamento } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCondicaoPagamentoDto } from './dto/create-condicao-pagamento.dto';
import { UpdateCondicaoPagamentoDto } from './dto/update-condicao-pagamento.dto';

@Injectable()
export class CondicaoPagamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCondicaoPagamentoDto): Promise<boolean> {
    const item = await this.prisma.condicaoPagamento.create({
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
        condicao: dto.condicao,
        divisor: dto.divisor,
        variacao: dto.variacao,
      },
    });

    return item !== null ? true : false;
  }

  async findAll(id: string): Promise<CondicaoPagamento[]> {
    return await this.prisma.condicaoPagamento.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<CondicaoPagamento> {
    return await this.prisma.condicaoPagamento.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateCondicaoPagamentoDto): Promise<boolean> {
    const item = await this.prisma.condicaoPagamento.update({
      where: {
        id: id,
      },
      data: {
        nome: dto.nome,
        idEmpresa: dto.idEmpresa,
        condicao: dto.condicao,
        divisor: dto.divisor,
        variacao: dto.variacao,
      },
    });

    return item !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const item = await this.prisma.condicaoPagamento.delete({
      where: {
        id: id,
      },
    });

    return item !== null ? true : false;
  }
}
