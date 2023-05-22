import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePessoaClassificacaoDto } from './dto/create-pessoa-classificacao.dto';
import { UpdatePessoaClassificacaoDto } from './dto/update-pessoa-classificacao.dto';
import { PessoaClassificacaoService } from './pessoa-classificacao.service';

@Controller('pessoa-classificacao')
export class PessoaClassificacaoController {
  constructor(
    private readonly pessoaClassificacaoService: PessoaClassificacaoService,
  ) {}

  @Post()
  create(@Body() createPessoaClassificacaoDto: CreatePessoaClassificacaoDto) {
    return this.pessoaClassificacaoService.create(createPessoaClassificacaoDto);
  }
  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.pessoaClassificacaoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaClassificacaoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePessoaClassificacaoDto: UpdatePessoaClassificacaoDto,
  ) {
    return this.pessoaClassificacaoService.update(
      id,
      updatePessoaClassificacaoDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaClassificacaoService.remove(id);
  }
}
