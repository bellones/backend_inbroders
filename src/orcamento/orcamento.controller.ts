import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrcamentoService } from './orcamento.service';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';

@Controller('orcamento')
export class OrcamentoController {
  constructor(private readonly orcamentoService: OrcamentoService) {}

  @Post()
  create(@Body() createOrcamentoDto: CreateOrcamentoDto) {
    return this.orcamentoService.create(createOrcamentoDto);
  }

  @Get()
  findAll() {
    return this.orcamentoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orcamentoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrcamentoDto: UpdateOrcamentoDto) {
    return this.orcamentoService.update(+id, updateOrcamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orcamentoService.remove(+id);
  }
}
