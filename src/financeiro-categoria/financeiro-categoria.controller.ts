import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateFinanceiroCategoriaDto } from './dto/create-financeiro-categoria.dto';
import { UpdateFinanceiroCategoriaDto } from './dto/update-financeiro-categoria.dto';
import { FinanceiroCategoriaService } from './financeiro-categoria.service';

@Controller('financeiro-categoria')
export class FinanceiroCategoriaController {
  constructor(
    private readonly financeiroCategoriaService: FinanceiroCategoriaService,
  ) {}

  @Post()
  create(@Body() createFinanceiroCategoriaDto: CreateFinanceiroCategoriaDto) {
    return this.financeiroCategoriaService.create(createFinanceiroCategoriaDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.financeiroCategoriaService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financeiroCategoriaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinanceiroCategoriaDto: UpdateFinanceiroCategoriaDto,
  ) {
    return this.financeiroCategoriaService.update(
      id,
      updateFinanceiroCategoriaDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financeiroCategoriaService.remove(id);
  }
}
