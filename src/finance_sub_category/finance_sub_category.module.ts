import { Module } from '@nestjs/common';
import { FinanceSubCategoryService } from './finance_sub_category.service';
import { FinanceSubCategoryController } from './finance_sub_category.controller';

@Module({
  controllers: [FinanceSubCategoryController],
  providers: [FinanceSubCategoryService]
})
export class FinanceSubCategoryModule {}
