import { Injectable } from '@nestjs/common';
import { Permissao } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePermissaoDto } from './dto/create-permissao.dto';
import { UpdatePermissaoDto } from './dto/update-permissao.dto';

@Injectable()
export class PermissaoService {
  constructor(private prisma: PrismaService) {}
  async list(idPessoa: string): Promise<Permissao[]> {
    const perm = await this.prisma.permissao.findMany({
      where: {
        idUsuario: idPessoa,
      },
    });
    return perm;
  }
  async createPermissao(
    dto: CreatePermissaoDto,
    idUsuario: string,
  ): Promise<boolean> {
    const response = await this.prisma.permissao.create({
      data: {
        item: dto.item,
        idUsuario: idUsuario,
      },
    });
    return response != null;
  }
  async updatePermissao(dto: UpdatePermissaoDto, id: string): Promise<boolean> {
    const response = await this.prisma.permissao.update({
      data: {
        item: dto.item,
      },
      where: {
        id: id,
      },
    });
    return response != null;
  }
}
