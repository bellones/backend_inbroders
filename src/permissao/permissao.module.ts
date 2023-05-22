import { Module } from '@nestjs/common';
import { PermissaoService } from './permissao.service';
import { PermissaoController } from './permissao.controller';

@Module({
  controllers: [PermissaoController],
  providers: [PermissaoService]
})
export class PermissaoModule {}
