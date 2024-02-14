import { Module } from '@nestjs/common';
import { ContaFinanceiroController } from './conta-financeiro.controller';
import { ContaFinanceiroService } from './conta-financeiro.service';

@Module({
  controllers: [ContaFinanceiroController],
  providers: [ContaFinanceiroService],
})
export class ContaFinanceiroModule {}
