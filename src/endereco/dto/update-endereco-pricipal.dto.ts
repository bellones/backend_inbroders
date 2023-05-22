import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class UpdateEnderecoPrincipalDto {
  @IsString()
  @IsNotEmpty()
  id: string;
  @IsBoolean()
  principal: boolean;
}
