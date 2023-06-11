import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrcamentoCategoriaDto } from './dto/create-orcamento-categoria.dto';
import { CreateOrcamentoItemDto } from './dto/create-orcamento-item.dto';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { OrcamentoService } from './orcamento.service';

@Controller('orcamento')
export class OrcamentoController {
  constructor(private readonly orcamentoService: OrcamentoService) {}

  @Post()
  create(@Body() dto: CreateOrcamentoDto) {
    return this.orcamentoService.create(dto);
  }

  @Post('/category')
  createCategory(@Body() dto: CreateOrcamentoCategoriaDto) {
    return this.orcamentoService.createCategory(dto);
  }

  @Post('/itens')
  createOrcamentoItens(@Body() dto: CreateOrcamentoItemDto) {
    return this.orcamentoService.createOrcamentoItens(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.orcamentoService.findAll(id);
  }
  @Get('/itens/:id')
  findItens(@Param('id') id: string) {
    return this.orcamentoService.findItens(id);
  }

  @Get('/clients/:id')
  findClients(@Param('id') id: string) {
    return this.orcamentoService.findClients(id);
  }

  @Get('/agency/:id')
  findAgency(@Param('id') id: string) {
    return this.orcamentoService.findAgency(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.orcamentoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() dto: UpdateOrcamentoDto) {
    return this.orcamentoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orcamentoService.remove(id);
  }

  @Delete('/category/:id')
  removeCategory(@Param('id') id: number) {
    return this.orcamentoService.removeCategory(id);
  }

  @Delete('/itens/:id')
  removeItens(@Param('id') id: string) {
    return this.orcamentoService.removeItens(id);
  }
}
