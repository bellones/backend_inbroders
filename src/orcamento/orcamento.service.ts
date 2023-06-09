import { Injectable } from '@nestjs/common';
import { Orcamento, OrcamentoItem, Pessoa } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrcamentoCategoriaDto } from './dto/create-orcamento-categoria.dto';
import { CreateOrcamentoentregavelDto } from './dto/create-orcamento-entregavel.dto';
import { CreateOrcamentoItemDto } from './dto/create-orcamento-item.dto';
import { CreateOrcamentoMidiasDto } from './dto/create-orcamento-midias.dto';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';

@Injectable()
export class OrcamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrcamentoDto): Promise<number> {
    const item = await this.prisma.orcamento.create({
      data: {
        idEmpresa: dto.idEmpresa,
        acrescimo: dto.acrescimo,
        comissao: dto.comissao,
        contatoAgencia: dto.contatoAgencia,
        contatoAgenciaEmail: dto.contatoAgenciaEmail,
        contatoAgenciaTelefone: dto.contatoAgenciaTelefone,
        contatoCliente: dto.contatoCliente,
        contatoClienteEmail: dto.contatoClienteEmail,
        contatoClienteTelefone: dto.contatoClienteTelefone,
        data: dto.data,
        diarias: dto.diarias,
        nome: dto.nome,
        notas: dto.notas,
        periodoVeiculacao: dto.periodoVeiculacao,
        showAgencia: dto.showAgencia,
        status: dto.status,
        validade: dto.validade,
        versao: dto.versao,
        agenciaId: dto.agenciaId,
        clientId: dto.clientId,
        empresaSaiadaId: dto.empresaSaiadaId,
        condicaoPagamentoId: dto.condicaoPagamentoId,
        modeloNegocioId: dto.modeloNegocioId,
        usuarioId: dto.usuarioId,
      },
    });

    return item.id;
  }
  async createCategory(dto: CreateOrcamentoCategoriaDto): Promise<boolean> {
    const item = await this.prisma.orcamentoCategoria.create({
      data: dto,
    });

    return item !== null ? true : false;
  }
  async createOrcamentoItens(dto: CreateOrcamentoItemDto): Promise<boolean> {
    const item = await this.prisma.orcamentoItem.create({
      data: {
        quantidade: dto.quantidade,
        valorTotal: dto.valorTotal,
        valorUn: dto.valorUn,
        descricao: dto.descricao,
        orcamentoCategoriaId: dto.orcamentoCategoriaId,
        produtoId: dto.produtoId,
        unidadeMedidaId: dto.unidadeMedidaId,
      },
    });

    return item !== null ? true : false;
  }
  async createMidias(dto: CreateOrcamentoMidiasDto): Promise<boolean> {
    const item = await this.prisma.orcamentoMidias.create({
      data: {
        midiasId: dto.midiasId,
        orcamentoId: dto.orcamentoId,
      },
    });
    return item !== null ? true : false;
  }
  async createEntregaveis(dto: CreateOrcamentoentregavelDto): Promise<boolean> {
    const item = await this.prisma.entregavelItens.create({
      data: {
        entregavelId: dto.entregavelId,
        orcamentoId: dto.orcamentoId,
        quantidade: dto.quantidade,
      },
    });
    return item !== null ? true : false;
  }
  async update(id: number, dto: UpdateOrcamentoDto): Promise<boolean> {
    const item = await this.prisma.orcamento.update({
      where: {
        id: id,
      },
      data: {
        idEmpresa: dto.idEmpresa,
        acrescimo: dto.acrescimo,
        comissao: dto.comissao,
        contatoAgencia: dto.contatoAgencia,
        contatoAgenciaEmail: dto.contatoAgenciaEmail,
        contatoAgenciaTelefone: dto.contatoAgenciaTelefone,
        contatoCliente: dto.contatoCliente,
        contatoClienteEmail: dto.contatoClienteEmail,
        contatoClienteTelefone: dto.contatoClienteTelefone,
        data: dto.data,
        diarias: dto.diarias,
        nome: dto.nome,
        notas: dto.notas,
        periodoVeiculacao: dto.periodoVeiculacao,
        showAgencia: dto.showAgencia,
        status: dto.status,
        validade: dto.validade,
        versao: dto.versao,
        agenciaId: dto.agenciaId,
        clientId: dto.clientId,
        empresaSaiadaId: dto.empresaSaiadaId,
        condicaoPagamentoId: dto.condicaoPagamentoId,
        modeloNegocioId: dto.modeloNegocioId,
        usuarioId: dto.usuarioId,
      },
    });

    return item !== null ? true : false;
  }
  async findAll(id: string): Promise<Orcamento[]> {
    return await this.prisma.orcamento.findMany({
      where: {
        idEmpresa: id,
      },
      include: {
        agencia: true,
        cliente: true,
        OrcamentoCategoria: true,
        condicaoPagamento: true,
        empresaSaida: true,
        EntregavelItens: true,
        modeloNegocio: true,
        OrcamentoMidias: true,
        Usuario: true,
      },
    });
  }
  async findOne(id: number): Promise<Orcamento> {
    return await this.prisma.orcamento.findFirst({
      where: {
        id: id,
      },
    });
  }
  async findItens(id: string): Promise<OrcamentoItem[]> {
    return await this.prisma.orcamentoItem.findMany({
      where: {
        orcamentoCategoriaId: id,
      },
    });
  }
  async findClients(id: string): Promise<Pessoa[]> {
    const cliente = await this.prisma.classificacao.findFirst({
      where: {
        nome: 'Cliente',
      },
    });
    return await this.prisma.pessoa.findMany({
      where: {
        classificacaoId: cliente.id,
        idEmpresa: id,
        ativo: true,
      },
      include: {
        Contato: true,
      },
    });
  }
  async findAgency(id: string): Promise<Pessoa[]> {
    const agencia = await this.prisma.classificacao.findFirst({
      where: {
        nome: 'Agência',
        idEmpresa: id,
      },
    });
    return await this.prisma.pessoa.findMany({
      where: {
        classificacaoId: agencia.id,
        ativo: true,
      },
      include: {
        Contato: true,
      },
    });
  }
  async findFilial(id: string): Promise<Pessoa[]> {
    const agencia = await this.prisma.classificacao.findFirst({
      where: {
        nome: 'Filial',
        idEmpresa: id,
      },
    });
    return await this.prisma.pessoa.findMany({
      where: {
        classificacaoId: agencia.id,
        ativo: true,
      },
    });
  }
  async remove(id: number): Promise<boolean> {
    const item = await this.prisma.orcamento.delete({
      where: {
        id: id,
      },
    });
    return item !== null ? true : false;
  }
  async removeCategory(id: number): Promise<boolean> {
    const item = await this.prisma.orcamentoCategoria.deleteMany({
      where: {
        orcamentoId: id,
      },
    });
    return item !== null ? true : false;
  }
  async removeItens(id: string): Promise<boolean> {
    const item = await this.prisma.orcamentoItem.deleteMany({
      where: {
        orcamentoCategoriaId: id,
      },
    });
    return item !== null ? true : false;
  }
  async removeEntregaveis(id: number): Promise<boolean> {
    const item = await this.prisma.entregavelItens.deleteMany({
      where: {
        orcamentoId: id,
      },
    });
    return item !== null ? true : false;
  }
  async removeMidias(id: number): Promise<boolean> {
    const item = await this.prisma.orcamentoMidias.deleteMany({
      where: {
        orcamentoId: id,
      },
    });
    return item !== null ? true : false;
  }
}
