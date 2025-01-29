import { IsOptional, IsString, IsInt, IsNotEmpty } from 'class-validator';

export class CreateTimerDto {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  taskId?: string;

  @IsOptional()
  @IsInt()
  projectId?: number;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @IsString()
  initialMoment: Date;

  @IsNotEmpty()
  @IsString()
  finalMoment: Date;

  @IsString()
  @IsNotEmpty()
  userId: string;
}
