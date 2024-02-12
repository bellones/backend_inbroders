import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateLancamentoDto } from './dto/create-lancamento.dto';
import { UpdateLancamentoDto } from './dto/update-lancamento.dto';
import { LancamentoService } from './lancamento.service';

@Controller('lancamento')
export class LancamentoController {
  constructor(private readonly lancamentoService: LancamentoService) {}

  @Post()
  create(@Body() createLancamentoDto: CreateLancamentoDto) {
    return this.lancamentoService.create(createLancamentoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.lancamentoService.findAll(id);
  }

  @Get('/contaspagar/:id')
  findContasPagar(@Param('id') id: string) {
    return this.lancamentoService.findContasPagar(id);
  }

  @Get('/contasreceber/:id')
  findContasReceber(@Param('id') id: string) {
    return this.lancamentoService.findContasReceber(id);
  }

  @Get('/lancamentodata/:id/:datainicio/:datafim')
  findLancamentoData(
    @Param('id') id: string,
    @Param('datainicio') datainicio: string,
    @Param('datafim') datafim: string,
  ) {
    return this.lancamentoService.findLancamentoData(id, datainicio, datafim);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lancamentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLancamentoDto: UpdateLancamentoDto,
  ) {
    return this.lancamentoService.update(id, updateLancamentoDto);
  }

  @Patch('/pagar/:id')
  pagar(@Param('id') id: string) {
    return this.lancamentoService.pagar(id);
  }

  @Patch('/removerpagamento/:id')
  removerPagamento(@Param('id') id: string) {
    return this.lancamentoService.removerPagamento(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lancamentoService.remove(id);
  }
}
