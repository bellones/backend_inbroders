import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EmailDto } from './dto/email.dto';
import { CodigoDto } from './dto/codigo.dto';
import { SenhaDto } from './dto/senha.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class RecuperarSenhaService {
  constructor(
    private prisma: PrismaService,
    private readonly mailService: MailerService,
  ) {}

  async mailValidate(payload: EmailDto): Promise<boolean> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      return false;
    }

    const code = Math.floor(100000 + Math.random() * 900000);

    await this.prisma.usuario.update({
      where: {
        id: user.id,
      },
      data: {
        codigoRecuperacao: code.toString(),
      },
    });

    await this.mailService.sendMail({
      to: payload.email,
      subject: 'Recuperação de senha',
      text: `Seu código de recuperação é: ${code}`,
    });

    return true;
  }

  async codeValidate(payload: CodigoDto): Promise<boolean> {
    const user = await this.prisma.usuario.findUnique({
      where: {
        email: payload.email,
      },
    });

    if (!user) {
      return false;
    }

    if (user.codigoRecuperacao !== payload.codigo) {
      return false;
    }

    return true;
  }

  async passUpdate(payload: SenhaDto): Promise<boolean> {
    if (!this.codeValidate({ email: payload.email, codigo: payload.codigo })) {
      return false;
    }

    const user = await this.prisma.usuario.findUnique({
      where: {
        email: payload.email,
      },
    });

    await this.prisma.usuario.update({
      where: {
        id: user.id,
      },
      data: {
        senha: payload.senha,
        codigoRecuperacao: '',
      },
    });

    return true;
  }
}
