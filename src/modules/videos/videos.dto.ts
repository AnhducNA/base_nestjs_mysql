import { IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateVideoDto {
  @IsNotEmpty()
  taskId: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;

  @IsOptional()
  link: string;

  @IsOptional()
  status: string;
}
