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
      include: {
        Permissao: true,
        UsuarioContato: true,
        UsuarioEndereco: true,
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
        ativo: true,
        idEmpresa: dto.idEmpresa,
        nascimento: dto.nascimento,
        cpf: dto.cpf,
        rg: dto.rg,
        dataAdmissao: dto.dataAdmissao,
        pispasep: dto.pispasep,
        ctps: dto.ctps,
        codigo: dto.codigo,
        salario: dto.salario,
      },
    });

    if (dto.endereco && usuario.id) {
      dto.endereco.forEach(async (endereco) => {
        await this.prisma.usuarioEndereco.create({
          data: {
            idUsuario: usuario.id,
            cep: endereco.cep,
            local: endereco.local,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            complemento: endereco.complemento,
            principal: endereco.principal,
          },
        });
      });
    }

    if (dto.contato && usuario.id) {
      dto.contato.forEach(async (contato) => {
        await this.prisma.usuarioContato.create({
          data: {
            idUsuario: usuario.id,
            nome: contato.nome,
            cargo: contato.cargo,
            telefone: contato.telefone,
            email: contato.email,
            principal: contato.principal,
          },
        });
      });
    }

    return usuario.id;
  }

  async findAll(id: string): Promise<Usuario[]> {
    return await this.prisma.usuario.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        Permissao: true,
        UsuarioContato: true,
        UsuarioEndereco: true,
      },
    });
  }

  async findOne(id: string): Promise<Usuario> {
    return await this.prisma.usuario.findFirst({
      where: {
        id: id,
      },
      include: {
        Permissao: true,
        UsuarioContato: true,
        UsuarioEndereco: true,
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
        ativo: true,
        idEmpresa: dto.idEmpresa,
        nascimento: dto.nascimento,
        cpf: dto.cpf,
        rg: dto.rg,
        dataAdmissao: dto.dataAdmissao,
        pispasep: dto.pispasep,
        ctps: dto.ctps,
        codigo: dto.codigo,
        salario: dto.salario,
      },
    });

    if (dto.endereco && usuario.id) {
      const remove = await this.prisma.usuarioEndereco.deleteMany({
        where: { idUsuario: usuario.id },
      });
      if (remove.count > 0) {
        dto.endereco.forEach(async (endereco) => {
          await this.prisma.usuarioEndereco.create({
            data: {
              idUsuario: usuario.id,
              cep: endereco.cep,
              local: endereco.local,
              numero: endereco.numero,
              bairro: endereco.bairro,
              cidade: endereco.cidade,
              estado: endereco.estado,
              complemento: endereco.complemento,
              principal: endereco.principal,
            },
          });
        });
      }
    }

    if (dto.contato && usuario.id) {
      const remove = await this.prisma.usuarioContato.deleteMany({
        where: { idUsuario: usuario.id },
      });
      if (remove.count > 0) {
        dto.contato.forEach(async (contato) => {
          await this.prisma.usuarioContato.create({
            data: {
              idUsuario: usuario.id,
              nome: contato.nome,
              cargo: contato.cargo,
              telefone: contato.telefone,
              email: contato.email,
              principal: contato.principal,
            },
          });
        });
      }
    }

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
