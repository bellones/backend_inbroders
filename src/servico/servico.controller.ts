import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateServicoDto } from './dto/create-servico.dto';
import { UpdateServicoDto } from './dto/update-servico.dto';
import { ServicoService } from './servico.service';

@Controller('servico')
export class ServicoController {
  constructor(private readonly servicoService: ServicoService) {}

  @Post()
  create(@Body() createTipoLancamentoDto: CreateServicoDto) {
    return this.servicoService.create(createTipoLancamentoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.servicoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.servicoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateServicoDto) {
    return this.servicoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.servicoService.remove(id);
  }
}
