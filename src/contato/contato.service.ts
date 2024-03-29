import { Injectable } from '@nestjs/common';
import { Contato } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Injectable()
export class ContatoService {
  constructor(private prisma: PrismaService) {}

  async list(idPessoa: string): Promise<Contato[]> {
    const contato = await this.prisma.contato.findMany({
      where: {
        idPessoa: idPessoa,
        ativo: true,
      },
    });
    return contato;
  }
  async listId(id: string): Promise<Contato> {
    const contato = await this.prisma.contato.findUnique({
      where: {
        id: id,
      },
    });
    return contato;
  }
  async createContato(dto: CreateContatoDto): Promise<Contato> {
    const item = await this.prisma.contato.create({
      data: {
        ativo: true,
        cargo: dto.cargo,
        email: dto.email,
        idPessoa: dto.idPessoa,
        nome: dto.nome,
        principal: Boolean(dto.principal),
        telefone: dto.telefone,
      },
    });
    return item;
  }
  async updateContato(dto: UpdateContatoDto): Promise<Contato> {
    const item = await this.prisma.contato.update({
      where: {
        id: dto.id,
      },
      data: {
        cargo: dto.cargo,
        email: dto.email,
        idPessoa: dto.idPessoa,
        nome: dto.nome,
        principal: Boolean(dto.principal),
        telefone: dto.telefone,
      },
    });
    return item;
  }
  async deleteContato(id: string): Promise<boolean> {
    const item = await this.prisma.contato.delete({
      where: {
        id: id,
      },
    });
    return item != null ? true : false;
  }
}
