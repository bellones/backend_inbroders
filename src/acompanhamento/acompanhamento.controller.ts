import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApontamentoComentario } from '@prisma/client';
import { AcompanhamentoService } from './acompanhamento.service';
import { AcompanhamentoCategoriaDto } from './dto/create-acompanhamento-categoria.dto';
import { AcompanhamentoItemDto } from './dto/create-acompanhamento-item.dto';
import { CreateAcompanhamentoDto } from './dto/create-acompanhamento.dto';
import { ApontamentoArquivo } from './dto/create-apontamento-arquivo.dt';
import { CreateApontamento } from './dto/create-apontamento.dto';
import { UpdateAcompanhamentoDto } from './dto/update-acompanhamento.dto';

@Controller('acompanhamento')
export class AcompanhamentoController {
  constructor(private readonly acompanhamentoService: AcompanhamentoService) {}

  @Post()
  create(@Body() createAcompanhamentoDto: CreateAcompanhamentoDto) {
    return this.acompanhamentoService.create(createAcompanhamentoDto);
  }

  @Post('/categoria')
  createCategoria(@Body() dto: AcompanhamentoCategoriaDto) {
    return this.acompanhamentoService.createCategoria(dto);
  }

  @Post('/item')
  createItem(@Body() dto: AcompanhamentoItemDto) {
    return this.acompanhamentoService.createItem(dto);
  }

  @Post('/apontamento')
  createApontamento(@Body() dto: CreateApontamento) {
    return this.acompanhamentoService.createApontamento(dto);
  }
  @Post('/apontamento/comentario')
  createComentario(@Body() dto: ApontamentoComentario) {
    return this.acompanhamentoService.createApontamentoComentario(dto);
  }
  @Post('/apontamento/arquivo')
  createArquivo(@Body() dto: ApontamentoArquivo) {
    return this.acompanhamentoService.createApontamentoArquivo(dto);
  }
  @Get('/list/:id')
  findAll(@Param('id') id: number) {
    return this.acompanhamentoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.acompanhamentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAcompanhamentoDto: UpdateAcompanhamentoDto,
  ) {
    return this.acompanhamentoService.update(+id, updateAcompanhamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.acompanhamentoService.remove(id);
  }
}
