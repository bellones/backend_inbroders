import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateContaDto } from './create-conta.dto';

export class UpdateContaDto extends PartialType(CreateContaDto) {
  @IsString()
  id: string;
}
