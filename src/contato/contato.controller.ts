import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ContatoService } from './contato.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Controller('contato')
export class ContatoController {
  constructor(private contatoService: ContatoService) {}
  @Get('list/:id')
  @HttpCode(HttpStatus.OK)
  list(@Param('id') id) {
    return this.contatoService.list(id);
  }
  @Get('listId/:id')
  @HttpCode(HttpStatus.OK)
  listId(@Param('id') id) {
    return this.contatoService.listId(id);
  }

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createTipo(@Body() dto: CreateContatoDto) {
    return this.contatoService.createContato(dto);
  }

  @Post('update')
  @HttpCode(HttpStatus.OK)
  updateTipo(@Body() dto: UpdateContatoDto) {
    return this.contatoService.updateContato(dto);
  }

  @Get('delete/:id')
  @HttpCode(HttpStatus.OK)
  deleteTipo(@Param('id') id) {
    return this.contatoService.deleteContato(id);
  }
}
