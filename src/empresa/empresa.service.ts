import { Injectable } from '@nestjs/common';
import { Empresa } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';

@Injectable()
export class EmpresaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEmpresaDto): Promise<boolean> {
    const empresa = await this.prisma.empresa.create({
      data: {
        cnpj: dto.cnpj,
        razaoSocial: dto.razaoSocial,
        ativo: dto.ativo,
        dataCadastro: dto.dataCadastro,
        inscricaoEstadual: dto.inscricaoEstadual,
        inscricaoMunicipal: dto.inscricaoMunicipal,
        matriz: dto.matriz,
        nomeFantasia: dto.nomeFantasia,
        cnae: dto.cnae,
        atividadePrincipal: dto.atividadePrincipal,
        regimeTributario: dto.regimeTributario,
        tamanhoEmpresa: dto.tamanhoEmpresa,
        comercio: dto.comercio,
        ecommerce: dto.ecommerce,
        industria: dto.industria,
        servicos: dto.servicos,
        faturamentoUltimoAno: dto.faturamentoUltimoAno,
        quantidadeFuncionarios: dto.quantidadeFuncionarios,
      },
    });

    if (dto.endereco && empresa.id) {
      dto.endereco.forEach(async (endereco) => {
        await this.prisma.enderecoEmpresa.create({
          data: {
            idEmpresa: empresa.id,
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

    if (dto.contato && empresa.id) {
      dto.contato.forEach(async (contato) => {
        await this.prisma.contatoEmpresa.create({
          data: {
            idEmpresa: empresa.id,
            nome: contato.nome,
            cargo: contato.cargo,
            telefone: contato.telefone,
            email: contato.email,
            principal: contato.principal,
          },
        });
      });
    }

    return empresa !== null ? true : false;
  }

  async findAll(): Promise<Empresa[]> {
    return await this.prisma.empresa.findMany();
  }

  async findOne(id: string): Promise<Empresa> {
    return await this.prisma.empresa.findFirst({
      where: {
        id: id,
      },
    });
  }

  async update(id: string, dto: UpdateEmpresaDto): Promise<boolean> {
    const empresa = await this.prisma.empresa.update({
      where: {
        id: id,
      },
      data: {
        cnpj: dto.cnpj,
        razaoSocial: dto.razaoSocial,
        ativo: dto.ativo,
        inscricaoEstadual: dto.inscricaoEstadual,
        inscricaoMunicipal: dto.inscricaoMunicipal,
        matriz: dto.matriz,
        nomeFantasia: dto.nomeFantasia,
        dataAtualizado: dto.dataAtualizado,
        cnae: dto.cnae,
        atividadePrincipal: dto.atividadePrincipal,
        regimeTributario: dto.regimeTributario,
        tamanhoEmpresa: dto.tamanhoEmpresa,
        comercio: dto.comercio,
        ecommerce: dto.ecommerce,
        industria: dto.industria,
        servicos: dto.servicos,
        faturamentoUltimoAno: dto.faturamentoUltimoAno,
        quantidadeFuncionarios: dto.quantidadeFuncionarios,
      },
    });

    if (dto.endereco && empresa.id) {
      const remove = await this.prisma.enderecoEmpresa.deleteMany({
        where: { idEmpresa: empresa.id },
      });
      if (remove.count > 0) {
        dto.endereco.forEach(async (endereco) => {
          await this.prisma.enderecoEmpresa.create({
            data: {
              idEmpresa: empresa.id,
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

    if (dto.contato && empresa.id) {
      const remove = await this.prisma.contatoEmpresa.deleteMany({
        where: { idEmpresa: empresa.id },
      });
      if (remove.count > 0) {
        dto.contato.forEach(async (contato) => {
          await this.prisma.contatoEmpresa.create({
            data: {
              idEmpresa: empresa.id,
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

    return empresa !== null ? true : false;
  }

  async remove(id: string): Promise<boolean> {
    const empresa = await this.prisma.empresa.update({
      where: {
        id: id,
      },
      data: {
        ativo: false,
      },
    });

    return empresa !== null ? true : false;
  }
}
