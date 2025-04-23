import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Usuario } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { LoginDTO } from './dto/login.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginGoogleDTO } from './dto/check-email.dto';
import { OAuth2Client } from 'google-auth-library';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  private auth2Client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  constructor(
    private prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async login(dto: LoginDTO): Promise<any> {
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

    if (!usuario) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    const token = this.jwtService.sign(usuario);

    return {
      ...usuario,
      access_token: token,
    };
  }

  async loginGoogle(payload: LoginGoogleDTO): Promise<any> {
    const ticket = await this.auth2Client.getTokenInfo(payload.token);

    if (!ticket) {
      throw new UnauthorizedException('Token inválido');
    }

    const usuario = await this.prisma.usuario.findFirst({
      where: {
        email: ticket.email,
      },
    });

    if (!usuario) {
      throw new UnauthorizedException('Usuário ou senha inválidos');
    }

    const token = this.jwtService.sign(usuario);

    return {
      ...usuario,
      access_token: token,
    };
  }

  async create(dto: CreateUserDTO): Promise<string> {
    const usuario = await this.prisma.usuario.create({
      data: {
        email: dto.email,
        nome: dto.nome,
        senha: dto.senha,
        ativo: true,
        nascimento: dto.nascimento,
        idEmpresa: dto.idEmpresa,
        cpf: dto.cpf,
        rg: dto.rg,
        dataAdmissao: dto.dataAdmissao,
        pispasep: dto.pispasep,
        ctps: dto.ctps,
        codigo: dto.codigo,
        salario: dto.salario,
        image: dto.image,
      },
    });

    if (dto.endereco && usuario.id) {
      for (const endereco of dto.endereco) {
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
            observacao: endereco.observacao,
          },
        });
      }
    }

    if (dto.contato && usuario.id) {
      for (const contato of dto.contato) {
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
      }
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
        nascimento: dto.nascimento,
        idEmpresa: dto.idEmpresa,
        cpf: dto.cpf,
        rg: dto.rg,
        dataAdmissao: dto.dataAdmissao,
        pispasep: dto.pispasep,
        ctps: dto.ctps,
        codigo: dto.codigo,
        salario: dto.salario,
        image: dto.image,
      },
    });

    if (dto.endereco && usuario.id) {
      for (const endereco of dto.endereco) {
        await this.prisma.usuarioEndereco.upsert({
          where: {
            id: endereco.id,
          },
          create: {
            idUsuario: usuario.id,
            cep: endereco.cep,
            local: endereco.local,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            complemento: endereco.complemento,
            principal: endereco.principal,
            observacao: endereco.observacao,
          },
          update: {
            idUsuario: usuario.id,
            cep: endereco.cep,
            local: endereco.local,
            numero: endereco.numero,
            bairro: endereco.bairro,
            cidade: endereco.cidade,
            estado: endereco.estado,
            complemento: endereco.complemento,
            principal: endereco.principal,
            observacao: endereco.observacao,
          },
        });
      }
    }

    if (dto.contato && usuario.id) {
      for (const contato of dto.contato) {
        await this.prisma.usuarioContato.upsert({
          where: {
            id: contato.id,
          },
          create: {
            idUsuario: usuario.id,
            nome: contato.nome,
            cargo: contato.cargo,
            telefone: contato.telefone,
            email: contato.email,
            principal: contato.principal,
          },
          update: {
            idUsuario: usuario.id,
            nome: contato.nome,
            cargo: contato.cargo,
            telefone: contato.telefone,
            email: contato.email,
            principal: contato.principal,
          },
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
