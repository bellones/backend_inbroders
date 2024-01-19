import { Module } from '@nestjs/common';
import { ContasReceberService } from './contas-receber.service';
import { ContasReceberController } from './contas-receber.controller';

@Module({
  controllers: [ContasReceberController],
  providers: [ContasReceberService]
})
export class ContasReceberModule {}
