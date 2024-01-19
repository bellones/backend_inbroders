import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContasReceberService } from './contas-receber.service';
import { CreateContasReceberArquivoDto } from './dto/create-contas-receber-arquivo.dto';
import { CreateContasReceberDto } from './dto/create-contas-receber.dto';
import { UpdateContasReceberDto } from './dto/update-contas-receber.dto';

@Controller('contas-receber')
export class ContasReceberController {
  constructor(private readonly contasReceberService: ContasReceberService) {}

  @Post()
  create(@Body() createContasPagarDto: CreateContasReceberDto) {
    return this.contasReceberService.create(createContasPagarDto);
  }

  @Post('/arquivo/create')
  createArquivo(@Body() dto: CreateContasReceberArquivoDto) {
    return this.contasReceberService.createArquivo(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.contasReceberService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contasReceberService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContasPagarDto: UpdateContasReceberDto,
  ) {
    return this.contasReceberService.update(id, updateContasPagarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contasReceberService.remove(id);
  }

  @Delete('/arquivo/:id')
  removeArquivo(@Param('id') id: string) {
    return this.contasReceberService.removeArquivo(id);
  }
}
