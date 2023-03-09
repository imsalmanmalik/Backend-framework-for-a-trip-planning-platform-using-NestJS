import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  cost: number;

  @IsNumber()
  locationId: number;
}
