import { PartialType } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CreateEnderecoDto } from './create-endereco.dto';

export class UpdateEnderecoDto extends PartialType(CreateEnderecoDto) {
  @IsString()
  id: string;
}
