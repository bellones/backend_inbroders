import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateMidiaDto } from './create-midia.dto';

export class UpdateMidiaDto extends PartialType(CreateMidiaDto) {
  @IsString()
  id: string;
}
