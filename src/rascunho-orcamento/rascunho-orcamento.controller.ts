import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateRascunhoOrcamentoDto } from './dto/create-rascunho-orcamento.dto';
import { UpdateRascunhoOrcamentoDto } from './dto/update-rascunho-orcamento.dto';
import { RascunhoOrcamentoService } from './rascunho-orcamento.service';

@Controller('rascunho-orcamento')
export class RascunhoOrcamentoController {
  constructor(
    private readonly rascunhoOrcamentoService: RascunhoOrcamentoService,
  ) {}

  @Post()
  create(@Body() createRascunhoOrcamentoDto: CreateRascunhoOrcamentoDto) {
    return this.rascunhoOrcamentoService.create(createRascunhoOrcamentoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.rascunhoOrcamentoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rascunhoOrcamentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRascunhoOrcamentoDto: UpdateRascunhoOrcamentoDto,
  ) {
    return this.rascunhoOrcamentoService.update(id, updateRascunhoOrcamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rascunhoOrcamentoService.remove(id);
  }
}
