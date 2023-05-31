import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrcamentoTipoDto } from './dto/create-orcamento-tipo.dto';
import { UpdateOrcamentoTipoDto } from './dto/update-orcamento-tipo.dto';
import { OrcamentoTipoService } from './orcamento-tipo.service';

@Controller('orcamento-tipo')
export class OrcamentoTipoController {
  constructor(private readonly orcamentoTipoService: OrcamentoTipoService) {}

  @Post()
  create(@Body() createOrcamentoTipoDto: CreateOrcamentoTipoDto) {
    return this.orcamentoTipoService.create(createOrcamentoTipoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.orcamentoTipoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orcamentoTipoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrcamentoTipoDto: UpdateOrcamentoTipoDto,
  ) {
    return this.orcamentoTipoService.update(id, updateOrcamentoTipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orcamentoTipoService.remove(id);
  }
}
