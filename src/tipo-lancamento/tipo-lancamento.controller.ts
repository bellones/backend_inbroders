import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTipoLancamentoDto } from './dto/create-tipo-lancamento.dto';
import { UpdateTipoLancamentoDto } from './dto/update-tipo-lancamento.dto';
import { TipoLancamentoService } from './tipo-lancamento.service';

@Controller('tipo-lancamento')
export class TipoLancamentoController {
  constructor(private readonly tipoLancamentoService: TipoLancamentoService) {}

  @Post()
  create(@Body() createTipoLancamentoDto: CreateTipoLancamentoDto) {
    return this.tipoLancamentoService.create(createTipoLancamentoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.tipoLancamentoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoLancamentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoLancamentoDto: UpdateTipoLancamentoDto,
  ) {
    return this.tipoLancamentoService.update(id, updateTipoLancamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoLancamentoService.remove(id);
  }
}
