import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateNotificationDTO } from './dto/create-notification.dto';
import { Notificacoes } from '@prisma/client';

@Injectable()
export class NotificacoesService {
  constructor(private prisma: PrismaService) {}

  async findNotificationsByUserId(id: string): Promise<Notificacoes[]> {
    return this.prisma.notificacoes.findMany({
      where: {
        idUsuario: id,
      },
    });
  }

  async createNotification(
    payload: CreateNotificationDTO,
  ): Promise<Notificacoes> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        id: payload.idUsuario,
      },
    });

    if (!user) {
      return null;
    }

    return this.prisma.notificacoes.create({
      data: {
        idUsuario: payload.idUsuario,
        descricao: payload.descricao,
        titulo: payload.titulo,
        dado: JSON.stringify(payload.dados),
        lida: false,
      },
    });
  }
}
