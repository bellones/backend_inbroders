import { Injectable } from '@nestjs/common';
import { Contato, Orcamento, Pessoa, Projeto, ProjetoOS } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProjetoAprovadorDto } from './dto/create-projeto-aprovador.dto';
import { ProjetoArquivoDto } from './dto/create-projeto-arquivo.dto';
import { ProjetoCategoriaDto } from './dto/create-projeto-categoria.dto';
import { ProjetoCidadeDto } from './dto/create-projeto-cidade.dto';
import { ProjetoContatoDto } from './dto/create-projeto-contato.dto';
import { ProjetoItemDto } from './dto/create-projeto-item.dto';
import { ProjetoOsDto } from './dto/create-projeto-os.dto';
import { ProjetoPessoDto } from './dto/create-projeto-pessoa.dto';
import { ProjetoProdutoDto } from './dto/create-projeto-produto.dto';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';

@Injectable()
export class ProjetoService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateProjetoDto): Promise<Projeto> {
    const item = await this.prisma.projeto.create({
      data: {
        linkCronograma: dto.linkCronograma,
        linkDiretor: dto.linkDiretor,
        linkPastaExecutiva: dto.linkPastaExecutiva,
        linkPastaFinalizacao: dto.linkPastaFinalizacao,
        notasClienteAgencia: dto.notasClienteAgencia,
        notasFaturamento: dto.notasFaturamento,
        notasInternas: dto.notasInternas,
        resumoCronograma: dto.resumoCronograma,
        aprovado: true,
        aprovadoCalculo: true,
        dataCriacao: new Date(Date.now()).toISOString(),
        dataEdicao: new Date(Date.now()).toISOString(),
        descricao: dto.descricao,
        orcamentoId: dto.orcamentoId,
        usuarioId: dto.usuarioId,
        idEmpresa: dto.idEmpresa,
      },
    });
    return item;
  }
  async createCategoria(dto: ProjetoCategoriaDto): Promise<string> {
    const item = await this.prisma.projetoCategoria.create({
      data: dto,
    });
    return item.id;
  }
  async createItem(dto: ProjetoItemDto): Promise<boolean> {
    const item = await this.prisma.projetoItem.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createProdutoItem(dto: ProjetoProdutoDto): Promise<boolean> {
    const item = await this.prisma.projetoProduto.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createCity(dto: ProjetoCidadeDto): Promise<boolean> {
    const item = this.prisma.projetoCidade.create({
      data: dto,
    });
    return item != null ? true : false;
  }

  async createAprovador(dto: ProjetoAprovadorDto): Promise<boolean> {
    const item = await this.prisma.projetoAprovador.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createProjetoPessoa(dto: ProjetoPessoDto): Promise<boolean> {
    const item = await this.prisma.projetoPessoa.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createProjetoContato(dto: ProjetoContatoDto): Promise<boolean> {
    const item = await this.prisma.projetoContato.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async createProjetoArquivo(dto: ProjetoArquivoDto): Promise<boolean> {
    const item = await this.prisma.projetoArquivos.create({
      data: dto,
    });
    return item !== null ? true : false;
  }

  async findAll(idEmpresa: string): Promise<Projeto[]> {
    return await this.prisma.projeto.findMany({
      where: {
        idEmpresa: idEmpresa,
      },
      include: {
        ProjetoCategoria: {
          include: {
            ProjetoItem: {
              include: {
                produto: true,
                unidade: true,
                Usuario: true,
              },
            },
          },
        },
        ProjetoAprovador: true,
        ProjetoContato: true,
        ProjetoArquivos: true,
        ProjetoPessoa: true,
        ProjetoCiddade: true,
        Orcamento: {
          include: {
            agencia: {
              include: {
                Contato: true,
              },
            },
            cliente: {
              include: {
                Contato: true,
              },
            },
            OrcamentoCategoria: {
              include: {
                OrcamentoItem: true,
                OrcamentoProduto: {
                  include: {
                    NovoProduto: true,
                  },
                },
              },
            },
            condicaoPagamento: true,
            empresaSaida: true,
            EntregavelItens: true,
            modeloNegocio: true,
            OrcamentoMidias: true,
            Usuario: true,
            notaRodape: true,
            CadastroDescricao: true,
          },
        },
      },
    });
  }

  async findOne(id: number): Promise<Projeto> {
    return await this.prisma.projeto.findFirst({
      where: {
        id: id,
      },
    });
  }

  async updateStatusOrcamento(id: number, status: string): Promise<boolean> {
    const item = await this.prisma.orcamento.update({
      where: {
        id: Number(id),
      },
      data: {
        status: status,
      },
    });
    return item != null ? true : false;
  }

  async update(id: number, dto: UpdateProjetoDto): Promise<Projeto> {
    const item = await this.prisma.projeto.update({
      where: {
        id: dto.id,
      },
      data: dto,
    });
    return item;
  }

  async remove(id: number): Promise<Projeto> {
    return await this.prisma.projeto.delete({
      where: {
        id: Number(id),
      },
    });
  }

  async removeCategoria(id: number): Promise<boolean> {
    const item = await this.prisma.projetoCategoria.deleteMany({
      where: {
        projetoId: Number(id),
      },
    });
    return item != null ? true : false;
  }

  async removeItem(id: string): Promise<boolean> {
    const item = await this.prisma.projetoItem.deleteMany({
      where: {
        projetoCategoriaId: id,
      },
    });
    return item != null ? true : false;
  }

  async removeProduto(id: string): Promise<boolean> {
    const item = await this.prisma.projetoProduto.deleteMany({
      where: {
        projetoCategoriaId: id,
      },
    });
    return item != null ? true : false;
  }

  async removeAprovador(id: number): Promise<boolean> {
    const item = await this.prisma.projetoAprovador.deleteMany({
      where: {
        projetoId: Number(id),
      },
    });
    return item != null ? true : false;
  }

  async removePessoa(id: number): Promise<boolean> {
    const item = await this.prisma.projetoPessoa.deleteMany({
      where: {
        projetoId: Number(id),
      },
    });
    return item != null ? true : false;
  }

  async removeContato(id: number): Promise<boolean> {
    const item = await this.prisma.projetoContato.deleteMany({
      where: {
        projetoId: Number(id),
      },
    });
    return item != null ? true : false;
  }

  async removeCidade(id: number): Promise<boolean> {
    const item = await this.prisma.projetoCidade.deleteMany({
      where: {
        projetoId: Number(id),
      },
    });
    return item != null ? true : false;
  }

  async removeArquivo(id: number): Promise<boolean> {
    const item = await this.prisma.projetoArquivos.deleteMany({
      where: {
        projetoId: Number(id),
      },
    });
    return item != null ? true : false;
  }

  async findAprovado(id: string, status: string): Promise<Orcamento[]> {
    return await this.prisma.orcamento.findMany({
      where: {
        idEmpresa: id,
        status: status,
      },
      include: {
        agencia: {
          include: {
            Contato: true,
          },
        },
        cliente: {
          include: {
            Contato: true,
          },
        },
        OrcamentoCategoria: {
          include: {
            OrcamentoItem: true,
            OrcamentoProduto: {
              include: {
                NovoProduto: true,
              },
            },
          },
        },
        condicaoPagamento: true,
        empresaSaida: true,
        EntregavelItens: true,
        modeloNegocio: true,
        OrcamentoMidias: true,
        Usuario: true,
        notaRodape: true,
        CadastroDescricao: true,
      },
      orderBy: {
        id: 'desc',
      },
    });
  }

  async findContato(id: string): Promise<Contato> {
    return await this.prisma.contato.findFirst({
      where: {
        id: id,
      },
    });
  }

  async findStatus(id: string, status: string): Promise<Projeto[]> {
    const item = await this.prisma.projeto.findMany({
      where: {
        idEmpresa: id,
        status: status,
      },
      include: {
        ProjetoCategoria: {
          include: {
            ProjetoItem: {
              include: {
                produto: true,
                unidade: true,
                Usuario: true,
              },
            },
          },
        },
        ProjetoAprovador: true,
        ProjetoContato: true,
        ProjetoArquivos: true,
        ProjetoPessoa: true,
        ProjetoCiddade: true,

        Orcamento: {
          include: {
            agencia: {
              include: {
                Contato: true,
              },
            },
            cliente: {
              include: {
                Contato: true,
              },
            },
            OrcamentoCategoria: {
              include: {
                OrcamentoItem: true,
              },
            },
            condicaoPagamento: true,
            empresaSaida: true,
            EntregavelItens: true,
            modeloNegocio: true,
            OrcamentoMidias: true,
            Usuario: true,
            notaRodape: true,
            CadastroDescricao: true,
          },
        },
      },
    });
    return item;
  }

  async findDif(id: string, status: string): Promise<Projeto[]> {
    const item = await this.prisma.projeto.findMany({
      where: {
        idEmpresa: id,
        status: {
          not: status,
        },
      },
      include: {
        ProjetoCategoria: {
          include: {
            ProjetoItem: {
              include: {
                produto: true,
                unidade: true,
                Usuario: true,
              },
            },
          },
        },
        ProjetoAprovador: true,
        ProjetoContato: true,
        ProjetoArquivos: true,
        ProjetoPessoa: true,
        ProjetoCiddade: true,

        Orcamento: {
          include: {
            agencia: {
              include: {
                Contato: true,
              },
            },
            cliente: {
              include: {
                Contato: true,
              },
            },
            OrcamentoCategoria: {
              include: {
                OrcamentoItem: true,
              },
            },
            condicaoPagamento: true,
            empresaSaida: true,
            EntregavelItens: true,
            modeloNegocio: true,
            OrcamentoMidias: true,
            Usuario: true,
            notaRodape: true,
            CadastroDescricao: true,
          },
        },
      },
    });
    return item;
  }

  async createProjetoOs(dto: ProjetoOsDto): Promise<boolean> {
    const item = this.prisma.projetoOS.create({
      data: dto,
    });

    return item != null ? true : false;
  }

  async deleteProjectOs(id: string): Promise<boolean> {
    const item = this.prisma.projetoOS.delete({
      where: {
        id: id,
      },
    });
    return item != null;
  }

  async getOs(id: number): Promise<ProjetoOS[]> {
    return this.prisma.projetoOS.findMany({
      where: {
        projetoItem: {
          ProjetoCategoria: {
            projetoId: id,
          },
        },
      },
      include: {
        formaPagamento: true,
        AcompanhamentoItem: true,
        fornecedor: true,
        projetoItem: {
          include: {
            produto: true,
            unidade: true,
          },
        },
      },
    });
  }

  async findFornecedor(id: string): Promise<Pessoa[]> {
    const cliente = await this.prisma.classificacao.findFirst({
      where: {
        idEmpresa: id,
        nome: 'Fornecedor',
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
}
