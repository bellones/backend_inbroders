import { PartialType } from '@nestjs/swagger';
import { CreatePedidoCompraDto } from './create-pedido-compra.dto';

export class UpdatePedidoCompraDto extends PartialType(CreatePedidoCompraDto) {
  id: string;
}
