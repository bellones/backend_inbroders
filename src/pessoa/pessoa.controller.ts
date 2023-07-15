import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePessoaFilialDto } from './dto/create-pessoa-filial.dto';
import { CreatePessoaDto } from './dto/create-pessoa.dto';
import { UpdatePessoaDto } from './dto/update-pessoa.dto';
import { PessoaService } from './pessoa.service';

@Controller('pessoa')
export class PessoaController {
  constructor(private readonly pessoaService: PessoaService) {}

  @Post()
  create(@Body() createPessoaDto: CreatePessoaDto) {
    return this.pessoaService.create(createPessoaDto);
  }
  @Post('/filial')
  createFilialPessoa(@Body() dto: CreatePessoaFilialDto) {
    return this.pessoaService.createFilialPessoa(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.pessoaService.findAll(id);
  }

  @Get('/list/filial/:id')
  listFilialPessoa(@Param('id') id: string) {
    return this.pessoaService.listFilialPessoa(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaService.findOne(id);
  }

  @Get('/search/:id/:busca')
  search(@Param('id') id: string, @Param('busca') busca: string) {
    return this.pessoaService.search(busca, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePessoaDto: UpdatePessoaDto) {
    return this.pessoaService.update(id, updatePessoaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaService.remove(id);
  }
  @Delete('filial/:id')
  removeFilial(@Param('id') id: string) {
    return this.pessoaService.removeFilial(id);
  }
}
