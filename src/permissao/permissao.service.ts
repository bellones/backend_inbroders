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
  async createPermissao(dto: CreatePermissaoDto[]): Promise<boolean> {
    let response;
    const newPerms = this.prisma.permissao.createMany({
      data: dto,
    });

    newPerms !== null ? (response = true) : (response = false);
    return response;
  }
  async updatePermissao(dto: UpdatePermissaoDto[]): Promise<boolean> {
    let response;
    const update = await this.prisma.permissao.updateMany({
      data: dto,
      where: {
        idUsuario: dto[0].idUsuario,
      },
    });
    update !== null ? (response = true) : (response = false);
    return response;
  }
}
