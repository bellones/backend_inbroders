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
  async createContato(dto: CreateContatoDto): Promise<boolean> {
    let response;
    const newEnd = await this.prisma.contato.create({
      data: {
        descricao: dto.descricao,
        idPessoa: dto.idPessoa,
        ativo: true,
        idTipo: dto.idTipo,
      },
    });
    newEnd !== null ? (response = true) : (response = false);
    return response;
  }
  async updateContato(dto: UpdateContatoDto): Promise<boolean> {
    let response;
    const update = await this.prisma.contato.update({
      where: {
        id: dto.id,
      },
      data: {
        descricao: dto.descricao,
        idTipo: dto.idTipo,
      },
    });
    update !== null ? (response = true) : (response = false);
    return response;
  }
  async deleteContato(id: string): Promise<boolean> {
    let response;
    const remove = await this.prisma.contato.update({
      where: {
        id: id,
      },
      data: {
        ativo: false,
      },
    });

    remove !== null ? (response = true) : (response = false);
    return response;
  }
}
