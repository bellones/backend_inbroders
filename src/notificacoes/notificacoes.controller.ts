import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { NotificacoesService } from './notificacoes.service';
import { CreateNotificationDTO } from './dto/create-notification.dto';

@Controller('notificacoes')
export class NotificacoesController {
  constructor(private service: NotificacoesService) {}

  @Get(':id')
  findNotificationsByUserId(@Param('id') id: string) {
    return this.service.findNotificationsByUserId(id);
  }

  @Post()
  createNotification(@Body() payload: CreateNotificationDTO) {
    return this.service.createNotification(payload);
  }
}
