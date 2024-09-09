import { Module } from '@nestjs/common';
import { RecuperarSenhaController } from './recuperar-senha.controller';
import { RecuperarSenhaService } from './recuperar-senha.service';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    MailerModule.forRoot({
      defaults: {
        from: process.env.EMAIL_FROM,
      },
      transport: {
        host: process.env.EMAIL_HOST,
        port: Number(process.env.EMAIL_PORT),
        secure: false,
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD,
        },
      },
    }),
  ],
  controllers: [RecuperarSenhaController],
  providers: [RecuperarSenhaService],
})
export class RecuperarSenhaModule {}
