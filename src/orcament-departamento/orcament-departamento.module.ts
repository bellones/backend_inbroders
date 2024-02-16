import { Module } from '@nestjs/common';
import { OrcamentDepartamentoService } from './orcament-departamento.service';
import { OrcamentDepartamentoController } from './orcament-departamento.controller';

@Module({
  controllers: [OrcamentDepartamentoController],
  providers: [OrcamentDepartamentoService]
})
export class OrcamentDepartamentoModule {}
