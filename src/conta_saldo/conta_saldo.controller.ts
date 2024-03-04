import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContaSaldoService } from './conta_saldo.service';
import { CreateContaSaldoDto } from './dto/create-conta_saldo.dto';
import { UpdateContaSaldoDto } from './dto/update-conta_saldo.dto';

@Controller('conta-saldo')
export class ContaSaldoController {
  constructor(private readonly contaSaldoService: ContaSaldoService) {}

  @Post()
  create(@Body() createContaSaldoDto: CreateContaSaldoDto) {
    return this.contaSaldoService.create(createContaSaldoDto);
  }

  @Get()
  findAll() {
    return this.contaSaldoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contaSaldoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContaSaldoDto: UpdateContaSaldoDto) {
    return this.contaSaldoService.update(+id, updateContaSaldoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contaSaldoService.remove(+id);
  }
}
