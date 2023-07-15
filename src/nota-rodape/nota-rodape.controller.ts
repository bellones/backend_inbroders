import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNotaRodapeDto } from './dto/create-nota-rodape.dto';
import { UpdateNotaRodapeDto } from './dto/update-nota-rodape.dto';
import { NotaRodapeService } from './nota-rodape.service';

@Controller('nota-rodape')
export class NotaRodapeController {
  constructor(private readonly notaRodapeService: NotaRodapeService) {}

  @Post()
  create(@Body() dto: CreateNotaRodapeDto) {
    return this.notaRodapeService.create(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.notaRodapeService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notaRodapeService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateNotaRodapeDto) {
    return this.notaRodapeService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notaRodapeService.remove(id);
  }
}
