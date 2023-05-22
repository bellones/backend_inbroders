import { Injectable } from '@nestjs/common';
import { EnderecoPessoa } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';

@Injectable()
export class EnderecoService {
  constructor(private prisma: PrismaService) {}

  async list(idPessoa: string): Promise<EnderecoPessoa[]> {
    const end = await this.prisma.enderecoPessoa.findMany({
      where: {
        idPessoa: idPessoa,
        ativo: true,
      },
    });
    return end;
  }
  async listId(id: string): Promise<EnderecoPessoa> {
    const end = await this.prisma.enderecoPessoa.findUnique({
      where: {
        id: id,
      },
    });
    return end;
  }
  async listPrincipal(id: string): Promise<EnderecoPessoa> {
    const end = await this.prisma.enderecoPessoa.findFirst({
      where: {
        id: id,
        principal: true,
      },
    });
    return end;
  }

  async updateEnderecoPrincipal(
    id: string,
    principal: boolean,
  ): Promise<boolean> {
    let response;
    const update = await this.prisma.enderecoPessoa.update({
      where: {
        id: id,
      },
      data: {
        principal: principal,
      },
    });
    update !== null ? (response = true) : (response = false);
    return response;
  }

  async createEnd(dto: CreateEnderecoDto): Promise<boolean> {
    let response;
    const newEnd = await this.prisma.enderecoPessoa.create({
      data: {
        bairro: dto.bairro,
        cep: dto.cep,
        cidade: dto.cidade,
        estado: dto.estado,
        local: dto.estado,
        numero: dto.numero,
        complemento: dto.complemento,
        idPessoa: dto.idPessoa,
        principal: dto.principal,
      },
    });
    newEnd !== null ? (response = true) : (response = false);
    return response;
  }
  async updateEndereco(dto: UpdateEnderecoDto): Promise<boolean> {
    let response;
    const update = await this.prisma.enderecoPessoa.update({
      where: {
        id: dto.id,
      },
      data: {
        bairro: dto.bairro,
        cep: dto.cep,
        cidade: dto.cidade,
        estado: dto.estado,
        local: dto.estado,
        numero: dto.numero,
        complemento: dto.complemento,
        idPessoa: dto.idPessoa,
        principal: dto.principal,
      },
    });
    update !== null ? (response = true) : (response = false);
    return response;
  }
  async deleteEndereco(id: string): Promise<boolean> {
    let response;
    const remove = await this.prisma.enderecoPessoa.update({
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
