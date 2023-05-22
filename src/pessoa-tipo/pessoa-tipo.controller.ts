import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePessoaTipoDto } from './dto/create-pessoa-tipo.dto';
import { UpdatePessoaTipoDto } from './dto/update-pessoa-tipo.dto';
import { PessoaTipoService } from './pessoa-tipo.service';

@Controller('pessoa-tipo')
export class PessoaTipoController {
  constructor(private readonly pessoaTipoService: PessoaTipoService) {}

  @Post()
  create(@Body() createPessoaTipoDto: CreatePessoaTipoDto) {
    return this.pessoaTipoService.create(createPessoaTipoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.pessoaTipoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pessoaTipoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePessoaTipoDto: UpdatePessoaTipoDto,
  ) {
    return this.pessoaTipoService.update(id, updatePessoaTipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pessoaTipoService.remove(id);
  }
}
