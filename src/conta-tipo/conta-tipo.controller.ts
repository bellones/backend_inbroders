import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContaTipoService } from './conta-tipo.service';
import { CreateContaTipoDto } from './dto/create-conta-tipo.dto';
import { UpdateContaTipoDto } from './dto/update-conta-tipo.dto';

@Controller('conta-tipo')
export class ContaTipoController {
  constructor(private readonly contaTipoService: ContaTipoService) {}

  @Post()
  create(@Body() createContaTipoDto: CreateContaTipoDto) {
    return this.contaTipoService.create(createContaTipoDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.contaTipoService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contaTipoService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContaTipoDto: UpdateContaTipoDto,
  ) {
    return this.contaTipoService.update(id, updateContaTipoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contaTipoService.remove(id);
  }
}
