import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateCustomerDto {
  @IsString()
  name: string;

  @IsNumber()
  budget: number;

  @IsNumber()
  noOfAdults: number;

  @IsNumber()
  noOfChildren: number;

  @IsNumber()
  noOfDays: number;

  @IsString()
  phone: string;

  @IsString()
  startDate: string;
}
