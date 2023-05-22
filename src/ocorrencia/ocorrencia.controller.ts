import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateOcorrenciaDto } from './dto/create-ocorrencia.dto';
import { UpdateOcorrenciaDto } from './dto/update-ocorrencia.dto';
import { OcorrenciaService } from './ocorrencia.service';

@Controller('ocorrencia')
export class OcorrenciaController {
  constructor(private readonly ocorrenciaService: OcorrenciaService) {}

  @Post()
  create(@Body() createOcorrenciaDto: CreateOcorrenciaDto) {
    return this.ocorrenciaService.create(createOcorrenciaDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.ocorrenciaService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ocorrenciaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateOcorrenciaDto: UpdateOcorrenciaDto,
  ) {
    return this.ocorrenciaService.update(id, updateOcorrenciaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ocorrenciaService.remove(id);
  }
}
