import { IsString } from 'class-validator';

export class LoginGoogleDTO {
  @IsString()
  token: string;
}
