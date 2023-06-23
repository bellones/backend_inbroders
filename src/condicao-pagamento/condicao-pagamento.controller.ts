import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CondicaoPagamentoService } from './condicao-pagamento.service';
import { CreateCondicaoPagamentoDto } from './dto/create-condicao-pagamento.dto';
import { UpdateCondicaoPagamentoDto } from './dto/update-condicao-pagamento.dto';

@Controller('condicao-pagamento')
export class CondicaoPagamentoController {
  constructor(
    private readonly condicaoPagamentoService: CondicaoPagamentoService,
  ) {}

  @Post()
  create(@Body() createCondicaoPagamentoDto: CreateCondicaoPagamentoDto) {
    return this.condicaoPagamentoService.create(createCondicaoPagamentoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.condicaoPagamentoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.condicaoPagamentoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCondicaoPagamentoDto: UpdateCondicaoPagamentoDto,
  ) {
    return this.condicaoPagamentoService.update(id, updateCondicaoPagamentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.condicaoPagamentoService.remove(id);
  }
}
