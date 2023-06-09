import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateProdutoUnidadeDto } from './dto/create-produto-itens.dto';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) {}

  @Post()
  create(@Body() createTipoLancamentoDto: CreateProdutoDto) {
    return this.produtoService.create(createTipoLancamentoDto);
  }
  @Post('/itens')
  createItens(@Body() dto: CreateProdutoUnidadeDto) {
    return this.produtoService.createItens(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.produtoService.findAll(id);
  }

  @Get('/itens/:id')
  findItens(@Param('id') id: string) {
    return this.produtoService.findItens(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProdutoDto) {
    return this.produtoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.produtoService.remove(id);
  }
  @Delete('/itens/:id')
  removeItens(@Param('id') id: string) {
    return this.produtoService.removeItens(id);
  }
}
