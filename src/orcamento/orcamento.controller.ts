import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOrcamentoItemDto } from './dto/create-orcamento-item.dto';
import { CreateOrcamentoDto } from './dto/create-orcamento.dto';
import { UpdateOrcamentoDto } from './dto/update-orcamento.dto';
import { OrcamentoService } from './orcamento.service';

@Controller('orcamento')
export class OrcamentoController {
  constructor(private readonly orcamentoService: OrcamentoService) {}

  @Post()
  create(@Body() createOrcamentoDto: CreateOrcamentoDto) {
    return this.orcamentoService.create(createOrcamentoDto);
  }

  @Post('/itens')
  createItens(@Body() dto: CreateOrcamentoItemDto) {
    return this.orcamentoService.createItem(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.orcamentoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.orcamentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOrcamentoDto: UpdateOrcamentoDto,
  ) {
    return this.orcamentoService.update(id, updateOrcamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.orcamentoService.remove(id);
  }

  @Delete('/remove/:id')
  removeItems(@Param('id') id: string) {
    return this.orcamentoService.deleteItems(id);
  }
}
