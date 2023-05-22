import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { CreateEnderecoDto } from './dto/create-endereco.dto';
import { UpdateEnderecoPrincipalDto } from './dto/update-endereco-pricipal.dto';
import { UpdateEnderecoDto } from './dto/update-endereco.dto';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private enderecoService: EnderecoService) {}

  @Get('list/:id')
  @HttpCode(HttpStatus.OK)
  list(@Param('id') id) {
    return this.enderecoService.list(id);
  }
  @Get('listId/:id')
  @HttpCode(HttpStatus.OK)
  listId(@Param('id') id) {
    return this.enderecoService.listId(id);
  }
  @Get('listPrincipal/:id')
  @HttpCode(HttpStatus.OK)
  listPrincipal(@Param('id') id) {
    return this.enderecoService.listPrincipal(id);
  }
  @Post('updateEnderecoPrincipal')
  @HttpCode(HttpStatus.OK)
  updateEnderecoPrincipal(@Body() dto: UpdateEnderecoPrincipalDto) {
    return this.enderecoService.updateEnderecoPrincipal(dto.id, dto.principal);
  }
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  create(@Body() dto: CreateEnderecoDto) {
    return this.enderecoService.createEnd(dto);
  }

  @Post('update')
  @HttpCode(HttpStatus.OK)
  update(@Body() dto: UpdateEnderecoDto) {
    return this.enderecoService.updateEndereco(dto);
  }

  @Get('delete/:id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id) {
    return this.enderecoService.deleteEndereco(id);
  }
}
