import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ContasPagarService } from './contas-pagar.service';
import { CreateContasPagarDto } from './dto/create-contas-pagar.dto';
import { UpdateContasPagarDto } from './dto/update-contas-pagar.dto';

@Controller('contas-pagar')
export class ContasPagarController {
  constructor(private readonly contasPagarService: ContasPagarService) {}

  @Post()
  create(@Body() createContasPagarDto: CreateContasPagarDto) {
    return this.contasPagarService.create(createContasPagarDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.contasPagarService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contasPagarService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContasPagarDto: UpdateContasPagarDto,
  ) {
    return this.contasPagarService.update(id, updateContasPagarDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contasPagarService.remove(id);
  }
}
