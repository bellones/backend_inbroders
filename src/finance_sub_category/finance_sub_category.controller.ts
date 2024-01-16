import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateFinanceSubCategoryDto } from './dto/create-finance_sub_category.dto';
import { UpdateFinanceSubCategoryDto } from './dto/update-finance_sub_category.dto';
import { FinanceSubCategoryService } from './finance_sub_category.service';

@Controller('finance-sub-category')
export class FinanceSubCategoryController {
  constructor(
    private readonly financeSubCategoryService: FinanceSubCategoryService,
  ) {}

  @Post()
  create(@Body() createFinanceSubCategoryDto: CreateFinanceSubCategoryDto) {
    return this.financeSubCategoryService.create(createFinanceSubCategoryDto);
  }

  @Get('/list/:id')
  findAll(@Param('id') id: string) {
    return this.financeSubCategoryService.findAll(id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.financeSubCategoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFinanceSubCategoryDto: UpdateFinanceSubCategoryDto,
  ) {
    return this.financeSubCategoryService.update(
      id,
      updateFinanceSubCategoryDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.financeSubCategoryService.remove(id);
  }
}
