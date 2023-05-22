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

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lancamentoService.remove(id);
  }
}
