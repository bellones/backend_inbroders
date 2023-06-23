import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateModeloNegocioDto } from './dto/create-modelo-negocio.dto';
import { UpdateModeloNegocioDto } from './dto/update-modelo-negocio.dto';
import { ModeloNegocioService } from './modelo-negocio.service';

@Controller('modelo-negocio')
export class ModeloNegocioController {
  constructor(private readonly modeloNegocioService: ModeloNegocioService) {}

  @Post()
  create(@Body() createModeloNegocioDto: CreateModeloNegocioDto) {
    return this.modeloNegocioService.create(createModeloNegocioDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.modeloNegocioService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modeloNegocioService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateModeloNegocioDto: UpdateModeloNegocioDto,
  ) {
    return this.modeloNegocioService.update(id, updateModeloNegocioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeloNegocioService.remove(id);
  }
}
