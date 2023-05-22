import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

import { CreatePermissaoDto } from './dto/create-permissao.dto';
import { UpdatePermissaoDto } from './dto/update-permissao.dto';
import { PermissaoService } from './permissao.service';

@Controller('permissao')
export class PermissaoController {
  constructor(private permissaoService: PermissaoService) {}
  @Get('list/:id')
  @HttpCode(HttpStatus.OK)
  list(@Param('id') id) {
    return this.permissaoService.list(id);
  }
  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createTipo(@Body() dto: CreatePermissaoDto[]) {
    return this.permissaoService.createPermissao(dto);
  }

  @Post('update')
  @HttpCode(HttpStatus.OK)
  updateTipo(@Body() dto: UpdatePermissaoDto[]) {
    return this.permissaoService.updatePermissao(dto);
  }
}
