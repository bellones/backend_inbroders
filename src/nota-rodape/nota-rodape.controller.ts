import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotaRodapeService } from './nota-rodape.service';
import { CreateNotaRodapeDto } from './dto/create-nota-rodape.dto';
import { UpdateNotaRodapeDto } from './dto/update-nota-rodape.dto';

@Controller('nota-rodape')
export class NotaRodapeController {
  constructor(private readonly notaRodapeService: NotaRodapeService) {}

  @Post()
  create(@Body() createNotaRodapeDto: CreateNotaRodapeDto) {
    return this.notaRodapeService.create(createNotaRodapeDto);
  }

  @Get()
  findAll() {
    return this.notaRodapeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notaRodapeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNotaRodapeDto: UpdateNotaRodapeDto) {
    return this.notaRodapeService.update(+id, updateNotaRodapeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notaRodapeService.remove(+id);
  }
}
