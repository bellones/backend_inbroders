import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrcamentDepartamentoDto } from './dto/create-orcament-departamento.dto';
import { OrcamentoDepartamentoItemDto } from './dto/create-orcamento-deptartamento-item';
import { UpdateOrcamentDepartamentoDto } from './dto/update-orcament-departamento.dto';
import { OrcamentDepartamentoService } from './orcament-departamento.service';

@Controller('orcament-departamento')
export class OrcamentDepartamentoController {
  constructor(
    private readonly orcamentDepartamentoService: OrcamentDepartamentoService,
  ) {}

  @Post()
  create(@Body() dto: CreateOrcamentDepartamentoDto) {
    return this.orcamentDepartamentoService.create(dto);
  }
  @Post()
  createItems(@Body() dto: OrcamentoDepartamentoItemDto) {
    return this.orcamentDepartamentoService.createItem(dto);
  }
  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.orcamentDepartamentoService.findAll(id);
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orcamentDepartamentoService.findOne(id);
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateOrcamentDepartamentoDto) {
    return this.orcamentDepartamentoService.update(id, dto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orcamentDepartamentoService.remove(id);
  }
  @Delete('/items/:id')
  removeItens(@Param('id') id: string) {
    return this.orcamentDepartamentoService.removeItens(id);
  }
}
