import { Module } from '@nestjs/common';
import { FinanceiroCategoriaService } from './financeiro-categoria.service';
import { FinanceiroCategoriaController } from './financeiro-categoria.controller';

@Module({
  controllers: [FinanceiroCategoriaController],
  providers: [FinanceiroCategoriaService]
})
export class FinanceiroCategoriaModule {}
