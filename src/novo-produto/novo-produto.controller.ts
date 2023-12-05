import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateNovoProdutoFornecedorDto } from './dto/create-novo-produto-fornecedor.dto';
import { CreateNovoProdutoDto } from './dto/create-novo-produto.dto';
import { UpdateNovoProdutoDto } from './dto/update-novo-produto.dto';
import { NovoProdutoService } from './novo-produto.service';

@Controller('novo-produto')
export class NovoProdutoController {
  constructor(private readonly novoProdutoService: NovoProdutoService) {}

  @Post()
  create(@Body() createNovoProdutoDto: CreateNovoProdutoDto) {
    return this.novoProdutoService.create(createNovoProdutoDto);
  }

  @Post('/fornecedor/')
  createFornecedor(@Body() dto: CreateNovoProdutoFornecedorDto) {
    return this.novoProdutoService.createFornecedor(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.novoProdutoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.novoProdutoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateNovoProdutoDto: UpdateNovoProdutoDto,
  ) {
    return this.novoProdutoService.update(id, updateNovoProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.novoProdutoService.remove(id);
  }
  @Delete('/fornecedor/:id')
  removeFornecedor(@Param('id') id: string) {
    return this.novoProdutoService.removeFornecedor(id);
  }
}
