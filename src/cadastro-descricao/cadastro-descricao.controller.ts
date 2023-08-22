import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CadastroDescricaoService } from './cadastro-descricao.service';
import { CreateCadastroDescricaoDto } from './dto/create-cadastro-descricao.dto';
import { UpdateCadastroDescricaoDto } from './dto/update-cadastro-descricao.dto';

@Controller('cadastro-descricao')
export class CadastroDescricaoController {
  constructor(
    private readonly cadastroDescricaoService: CadastroDescricaoService,
  ) {}

  @Post()
  create(@Body() dto: CreateCadastroDescricaoDto) {
    return this.cadastroDescricaoService.create(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.cadastroDescricaoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadastroDescricaoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateCadastroDescricaoDto) {
    return this.cadastroDescricaoService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadastroDescricaoService.remove(id);
  }
}
