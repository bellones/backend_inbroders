import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContatoTipoService } from './contato-tipo.service';
import { CreateContatoTipoDto } from './dto/create-contato-tipo.dto';
import { UpdateContatoTipoDto } from './dto/update-contato-tipo.dto';

@Controller('contato-tipo')
export class ContatoTipoController {
  constructor(private readonly contatoTipoService: ContatoTipoService) {}

  @Post()
  create(@Body() createContatoTipoDto: CreateContatoTipoDto) {
    return this.contatoTipoService.create(createContatoTipoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.contatoTipoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contatoTipoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContatoTipoDto: UpdateContatoTipoDto,
  ) {
    return this.contatoTipoService.update(id, updateContatoTipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contatoTipoService.remove(id);
  }
}
