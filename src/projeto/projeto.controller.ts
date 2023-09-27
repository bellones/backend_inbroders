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
import { ProjetoContatoDto } from './dto/create-projeto-contato.dto';
import { ProjetoItemDto } from './dto/create-projeto-item.dto';
import { ProjetoPessoDto } from './dto/create-projeto-pessoa.dto';
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

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.projetoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.projetoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProjetoDto: UpdateProjetoDto) {
    return this.projetoService.update(id, updateProjetoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.projetoService.remove(id);
  }
}
