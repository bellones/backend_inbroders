import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContaFinanceiroService } from './conta-financeiro.service';
import { CreateContaFinanceiroDto } from './dto/create-conta-financeiro.dto';
import { UpdateContaFinanceiroDto } from './dto/update-conta-financeiro.dto';

@Controller('conta-financeiro')
export class ContaFinanceiroController {
  constructor(
    private readonly contaFinanceiroService: ContaFinanceiroService,
  ) {}

  @Post()
  create(@Body() createContaFinanceiroDto: CreateContaFinanceiroDto) {
    return this.contaFinanceiroService.create(createContaFinanceiroDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.contaFinanceiroService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contaFinanceiroService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContaFinanceiroDto: UpdateContaFinanceiroDto,
  ) {
    return this.contaFinanceiroService.update(id, updateContaFinanceiroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contaFinanceiroService.remove(id);
  }
}
