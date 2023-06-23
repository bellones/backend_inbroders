import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateEntregavelDto } from './dto/create-entregavel.dto';
import { UpdateEntregavelDto } from './dto/update-entregavel.dto';
import { EntregavelService } from './entregavel.service';

@Controller('entregavel')
export class EntregavelController {
  constructor(private readonly entregavelService: EntregavelService) {}

  @Post()
  create(@Body() createEntregavelDto: CreateEntregavelDto) {
    return this.entregavelService.create(createEntregavelDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.entregavelService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.entregavelService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEntregavelDto: UpdateEntregavelDto,
  ) {
    return this.entregavelService.update(id, updateEntregavelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.entregavelService.remove(id);
  }
}
