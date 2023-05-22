import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoriaLancamentoService } from './categoria-lancamento.service';
import { CreateCategoriaLancamentoDto } from './dto/create-categoria-lancamento.dto';
import { UpdateCategoriaLancamentoDto } from './dto/update-categoria-lancamento.dto';

@Controller('categoria-lancamento')
export class CategoriaLancamentoController {
  constructor(
    private readonly categoriaLancamentoService: CategoriaLancamentoService,
  ) {}

  @Post()
  create(@Body() createCategoriaLancamentoDto: CreateCategoriaLancamentoDto) {
    return this.categoriaLancamentoService.create(createCategoriaLancamentoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.categoriaLancamentoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoriaLancamentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoriaLancamentoDto: UpdateCategoriaLancamentoDto,
  ) {
    return this.categoriaLancamentoService.update(
      id,
      updateCategoriaLancamentoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoriaLancamentoService.remove(id);
  }
}
