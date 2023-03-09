import { IsNumber, IsString } from 'class-validator';

export class CreateBookingDto {
  @IsNumber()
  cost: number;

  @IsNumber()
  locationId: number;

  @IsNumber()
  regionId: number;

  @IsNumber()
  customerId: number;

  @IsNumber()
  transportId: number;

  @IsNumber()
  hotelId: number;

  @IsNumber()
  activityId: number;
}
