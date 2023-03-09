import { IsNumber, IsString } from 'class-validator';

export class CreateHotelDto {
  @IsString()
  name: string;

  @IsNumber()
  rating: number;

  @IsNumber()
  cost: number;

  @IsNumber()
  locationId: number;
}
