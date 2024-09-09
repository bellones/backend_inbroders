import { IsObject, IsString } from 'class-validator';

export class CreateNotificationDTO {
  @IsString()
  idUsuario: string;
  @IsString()
  titulo: string;
  @IsString()
  descricao: string;
  @IsObject()
  dados: object;
}
