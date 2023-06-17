import { Injectable } from '@nestjs/common';
import { Orcamento, OrcamentoItem, Pessoa } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateOrcamentoCategoriaDto } from './dto/create-orcamento-categoria.dto';
import { CreateOrcamentoItemDto } from './dto/create-orcamento-item.dto';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';

@Injectable()
export class OrcamentoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateOrcamentoDto): Promise<number> {
    const item = await this.prisma.orcamento.create({
      data: {
        idEmpresa: dto.idEmpresa,
        clientId: dto.clientId,
        contatoCliente: dto.contatoCliente,
        comissionadoId: dto.comissionadoId,
        agenciaId: dto.agenciaId,
        contatoAgencia: dto.contatoAgencia,
        servicoId: dto.servicoId,
        tipoTaxaProdutora: dto.tipoTaxaProdutora,
        taxaProdutora: dto.taxaProdutora,
        tipoImposto: dto.tipoImposto,
        imposto: dto.imposto,
        bv: dto.bv,
        comissao: dto.comissao,
        desconto: dto.desconto,
        acrescimo: dto.acrescimo,
        data: dto.data,
        titulo: dto.titulo,
        status: dto.status,
        descricao: dto.descricao,
        condicaoPagamento: dto.condicaoPagamento,
        tipoVeiculacao: dto.tipoVeiculacao,
        duracaoVeiculacao: dto.duracaoVeiculacao,
        nomePeca: dto.nomePeca,
        duracao: dto.duracao,
        tipoFormato: dto.tipoFormato,
        midiaVeiculos: dto.midiaVeiculos,
        pracaVeiculacao: dto.pracaVeiculacao,
        periodo: dto.periodo,
        diaria: dto.diaria,
        validade: dto.validade,
        copias: dto.copias,
        produtores: dto.produtores,
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
  async update(id: number, dto: UpdateOrcamentoDto): Promise<boolean> {
    const item = await this.prisma.orcamento.update({
      where: {
        id: id,
      },
      data: {
        idEmpresa: dto.idEmpresa,
        clientId: dto.clientId,
        contatoCliente: dto.contatoCliente,
        comissionadoId: dto.comissionadoId,
        agenciaId: dto.agenciaId,
        contatoAgencia: dto.contatoAgencia,
        servicoId: dto.servicoId,
        tipoTaxaProdutora: dto.tipoTaxaProdutora,
        taxaProdutora: dto.taxaProdutora,
        tipoImposto: dto.tipoImposto,
        imposto: dto.imposto,
        bv: dto.bv,
        comissao: dto.comissao,
        desconto: dto.desconto,
        acrescimo: dto.acrescimo,
        data: dto.data,
        titulo: dto.titulo,
        status: dto.status,
        descricao: dto.descricao,
        condicaoPagamento: dto.condicaoPagamento,
        tipoVeiculacao: dto.tipoVeiculacao,
        duracaoVeiculacao: dto.duracaoVeiculacao,
        nomePeca: dto.nomePeca,
        duracao: dto.duracao,
        tipoFormato: dto.tipoFormato,
        midiaVeiculos: dto.midiaVeiculos,
        pracaVeiculacao: dto.pracaVeiculacao,
        periodo: dto.periodo,
        diaria: dto.diaria,
        validade: dto.validade,
        copias: dto.copias,
        produtores: dto.produtores,
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
        comissionado: true,
        OrcamentoCategoria: true,
        servico: true,
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
}
