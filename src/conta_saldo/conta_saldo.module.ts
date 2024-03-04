import { Module } from '@nestjs/common';
import { ContaSaldoService } from './conta_saldo.service';
import { ContaSaldoController } from './conta_saldo.controller';

@Module({
  controllers: [ContaSaldoController],
  providers: [ContaSaldoService]
})
export class ContaSaldoModule {}
