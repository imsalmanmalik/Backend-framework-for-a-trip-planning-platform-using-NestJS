import { IsNumber, IsString } from 'class-validator';

export class CreateTransportDto {
  @IsString()
  name: string;

  @IsString()
  make: string;

  @IsString()
  model: string;

  @IsNumber()
  year: number;

  @IsNumber()
  cost: number;
}
