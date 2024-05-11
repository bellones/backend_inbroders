import { Injectable } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async login(dto: LoginDTO): Promise<Usuario> {
    const usuario = await this.prisma.usuario.findFirst({
      where: {
        email: dto.usuario,
        senha: dto.senha,
      },
    });
    return usuario;
  }

  async create(dto: CreateUserDTO): Promise<string> {
    const usuario = await this.prisma.usuario.create({
      data: {
        email: dto.email,
        nome: dto.nome,
        senha: dto.senha,
        telefone: dto.telefone,
        ativo: true,
        idEmpresa: dto.idempresa,
      },
    });

    return usuario.id;
  }

  async findAll(id: string): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany({
      where: {
        idEmpresa: id,
      },
    });
  }

  async findOne(id: string): Promise<Usuario> {
    return await this.prisma.usuario.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateUserDto): Promise<boolean> {
    const usuario = await this.prisma.usuario.update({
      where: {
        id: id,
      },
      data: {
        email: dto.email,
        nome: dto.nome,
        senha: dto.senha,
        telefone: dto.telefone,
        idEmpresa: dto.idempresa,
      },
    });

    return usuario !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const usuario = await this.prisma.usuario.update({
      where: {
        id: id,
      },
      data: {
        ativo: false,
      },
    });

    return usuario !== null ? true : false;
  }
}
