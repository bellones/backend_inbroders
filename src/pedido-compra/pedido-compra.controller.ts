import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CompraPedidoItem } from './dto/create-pedido-compra-item.dto';
import { CreatePedidoCompraServicoDto } from './dto/create-pedido-compra-servico.dto';
import { CreatePedidoCompraDto } from './dto/create-pedido-compra.dto';
import { UpdatePedidoCompraDto } from './dto/update-pedido-compra.dto';
import { PedidoCompraService } from './pedido-compra.service';

@Controller('pedido-compra')
export class PedidoCompraController {
  constructor(private readonly pedidoCompraService: PedidoCompraService) {}

  @Post()
  create(@Body() createPedidoCompraDto: CreatePedidoCompraDto) {
    return this.pedidoCompraService.create(createPedidoCompraDto);
  }
  @Post('/items/')
  createItens(@Body() dto: CompraPedidoItem) {
    return this.pedidoCompraService.createItem(dto);
  }
  @Post('/servico/')
  createServico(@Body() dto: CreatePedidoCompraServicoDto) {
    return this.pedidoCompraService.createServico(dto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.pedidoCompraService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pedidoCompraService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePedidoCompraDto: UpdatePedidoCompraDto,
  ) {
    return this.pedidoCompraService.update(id, updatePedidoCompraDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pedidoCompraService.remove(id);
  }
  @Delete('/items/:id')
  removeItems(@Param('id') id: string) {
    return this.pedidoCompraService.removeItem(id);
  }
  @Delete('/servico/:id')
  removeServico(@Param('id') id: string) {
    return this.pedidoCompraService.removeServico(id);
  }
}
