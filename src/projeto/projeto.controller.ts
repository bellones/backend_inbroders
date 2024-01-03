import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
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
import { ProjetoService } from './projeto.service';

@Controller('projeto')
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}

  @Post()
  create(@Body() createProjetoDto: CreateProjetoDto) {
    return this.projetoService.create(createProjetoDto);
  }
  @Post('/categoria')
  createCategoria(@Body() dto: ProjetoCategoriaDto) {
    return this.projetoService.createCategoria(dto);
  }

  @Post('/item')
  createItem(@Body() dto: ProjetoItemDto) {
    return this.projetoService.createItem(dto);
  }

  @Post('/produto')
  createProduto(@Body() dto: ProjetoProdutoDto) {
    return this.projetoService.createProdutoItem(dto);
  }

  @Post('/aprovador')
  createAprovador(@Body() dto: ProjetoAprovadorDto) {
    return this.projetoService.createAprovador(dto);
  }

  @Post('/pessoa')
  createPessoa(@Body() dto: ProjetoPessoDto) {
    return this.projetoService.createProjetoPessoa(dto);
  }

  @Post('/contato')
  createContato(@Body() dto: ProjetoContatoDto) {
    return this.projetoService.createProjetoContato(dto);
  }

  @Post('/arquivo')
  createArquivo(@Body() dto: ProjetoArquivoDto) {
    return this.projetoService.createProjetoArquivo(dto);
  }

  @Post('/cidade')
  createCidade(@Body() dto: ProjetoCidadeDto) {
    return this.projetoService.createCity(dto);
  }

  @Post('/OS')
  createOS(@Body() dto: ProjetoOsDto) {
    return this.projetoService.createProjetoOs(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.projetoService.findAll(id);
  }
  @Get('/conciliacao/:id/:status')
  findStatus(@Param('id') id: string, @Param('status') status: string) {
    return this.projetoService.findStatus(id, status);
  }

  @Get('/administrativo/:id/:status')
  findDif(@Param('id') id: string, @Param('status') status: string) {
    return this.projetoService.findDif(id, status);
  }

  @Get('/orcamento/aprovado/:id/:status')
  findAprovado(@Param('id') id: string, @Param('status') status: string) {
    return this.projetoService.findAprovado(id, status);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projetoService.findOne(id);
  }

  @Get('/contato/:id')
  findContato(@Param('id') id: string) {
    return this.projetoService.findContato(id);
  }

  @Get('/OS/list/:id')
  findOS(@Param('id') id: number) {
    return this.projetoService.getOs(id);
  }

  @Get('/fornecedor/list/:id')
  findFornecedor(@Param('id') id: string) {
    return this.projetoService.findFornecedor(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjetoDto: UpdateProjetoDto) {
    return this.projetoService.update(id, updateProjetoDto);
  }

  @Patch('/orcamento/status/:id/:status')
  updateStatusOrcamento(
    @Param('id') id: number,
    @Param('status') status: string,
  ) {
    return this.projetoService.updateStatusOrcamento(id, status);
  }
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projetoService.remove(id);
  }
  @Delete('/categoria/:id')
  removeCategoria(@Param('id') id: number) {
    return this.projetoService.removeCategoria(id);
  }
  @Delete('/item/:id')
  removeItem(@Param('id') id: string) {
    return this.projetoService.removeItem(id);
  }
  @Delete('/item/:id')
  removeProduto(@Param('id') id: string) {
    return this.projetoService.removeProduto(id);
  }
  @Delete('/aprovador/:id')
  removeAprovador(@Param('id') id: number) {
    return this.projetoService.removeAprovador(id);
  }
  @Delete('/aprovador/:id')
  removePessoa(@Param('id') id: number) {
    return this.projetoService.removePessoa(id);
  }
  @Delete('/contato/:id')
  removeContato(@Param('id') id: number) {
    return this.projetoService.removeContato(id);
  }
  @Delete('/arquivo/:id')
  removeArquivo(@Param('id') id: number) {
    return this.projetoService.removeArquivo(id);
  }
  @Delete('/cidade/:id')
  removeCidade(@Param('id') id: number) {
    return this.projetoService.removeCidade(id);
  }

  @Delete('/os/:id')
  removeProjetoOS(@Param('id') id: string) {
    return this.projetoService.deleteProjectOs(id);
  }
}
