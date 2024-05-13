import { Module } from '@nestjs/common';
import { PermissaoController } from './permissao.controller';
import { PermissaoService } from './permissao.service';

@Module({
  controllers: [PermissaoController],
  providers: [PermissaoService],
})
export class PermissaoModule {}
