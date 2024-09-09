import { Body, Controller, Post } from '@nestjs/common';

import { RecuperarSenhaService } from './recuperar-senha.service';
import { EmailDto } from './dto/email.dto';
import { SenhaDto } from './dto/senha.dto';
import { CodigoDto } from './dto/codigo.dto';

@Controller('recuperar-senha')
export class RecuperarSenhaController {
  constructor(private readonly recuperarService: RecuperarSenhaService) {}

  @Post('/email-validacao')
  sendMailValidate(@Body() payload: EmailDto) {
    return this.recuperarService.mailValidate(payload);
  }

  @Post('/codigo-validacao')
  sendCodeValidate(@Body() payload: CodigoDto) {
    return this.recuperarService.codeValidate(payload);
  }

  @Post('/senha-alteracao')
  sendPassUpdate(@Body() payload: SenhaDto) {
    return this.recuperarService.passUpdate(payload);
  }
}
