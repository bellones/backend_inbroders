import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateModeloItensOrcamentoCategoria } from './dto/create-modelo-itens-orcamento-categoria.dto';
import { CreateModeloItensOrcamentoList } from './dto/create-modelo-itens-orcamento-list.dto';
import { CreateModeloItensOrcamentoDto } from './dto/create-modelo-itens-orcamento.dto';
import { UpdateModeloItensOrcamentoDto } from './dto/update-modelo-itens-orcamento.dto';
import { ModeloItensOrcamentoService } from './modelo-itens-orcamento.service';

@Controller('modelo-itens-orcamento')
export class ModeloItensOrcamentoController {
  constructor(
    private readonly modeloItensOrcamentoService: ModeloItensOrcamentoService,
  ) {}

  @Post()
  create(@Body() dto: CreateModeloItensOrcamentoDto) {
    return this.modeloItensOrcamentoService.create(dto);
  }

  @Post('/category')
  createCategory(@Body() dto: CreateModeloItensOrcamentoCategoria) {
    return this.modeloItensOrcamentoService.createCategory(dto);
  }

  @Post('/itens')
  createOrcamentoItens(@Body() dto: CreateModeloItensOrcamentoList) {
    return this.modeloItensOrcamentoService.createOrcamentoItens(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.modeloItensOrcamentoService.findAll(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateModeloItensOrcamentoDto) {
    return this.modeloItensOrcamentoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeloItensOrcamentoService.remove(id);
  }

  @Delete('/category/:id')
  removeCategory(@Param('id') id: string) {
    return this.modeloItensOrcamentoService.removeCategory(id);
  }

  @Delete('/itens/:id')
  removeItens(@Param('id') id: string) {
    return this.modeloItensOrcamentoService.removeItens(id);
  }
}
