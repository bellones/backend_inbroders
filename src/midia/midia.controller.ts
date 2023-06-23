import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateMidiaDto } from './dto/create-midia.dto';
import { UpdateMidiaDto } from './dto/update-midia.dto';
import { MidiaService } from './midia.service';

@Controller('midia')
export class MidiaController {
  constructor(private readonly midiaService: MidiaService) {}

  @Post()
  create(@Body() createMidiaDto: CreateMidiaDto) {
    return this.midiaService.create(createMidiaDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.midiaService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.midiaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMidiaDto: UpdateMidiaDto) {
    return this.midiaService.update(id, updateMidiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.midiaService.remove(id);
  }
}
