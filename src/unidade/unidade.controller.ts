import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateUnidadeDto } from './dto/create-unidade.dto';
import { UpdateUnidadeDto } from './dto/update-unidade.dto';
import { UnidadeService } from './unidade.service';

@Controller('unidade')
export class UnidadeController {
  constructor(private readonly unidadeService: UnidadeService) {}

  @Post()
  create(@Body() createTipoLancamentoDto: CreateUnidadeDto) {
    return this.unidadeService.create(createTipoLancamentoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.unidadeService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.unidadeService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTipoLancamentoDto: UpdateUnidadeDto,
  ) {
    return this.unidadeService.update(id, updateTipoLancamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.unidadeService.remove(id);
  }
}
