import { Module } from '@nestjs/common';
import { PedidoCompraController } from './pedido-compra.controller';
import { PedidoCompraService } from './pedido-compra.service';

@Module({
  controllers: [PedidoCompraController],
  providers: [PedidoCompraService],
})
export class PedidoCompraModule {}
