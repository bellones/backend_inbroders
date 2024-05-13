import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePermissaoDto {
  @IsString()
  @IsNotEmpty()
  item: string;
}
