import { PartialType } from '@nestjs/swagger';
import { CreateNotaRodapeDto } from './create-nota-rodape.dto';

export class UpdateNotaRodapeDto extends PartialType(CreateNotaRodapeDto) {}
