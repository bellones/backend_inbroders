import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateFinanceSubCategoryDto } from './create-finance_sub_category.dto';

export class UpdateFinanceSubCategoryDto extends PartialType(
  CreateFinanceSubCategoryDto,
) {
  @IsString()
  id: string;
}
