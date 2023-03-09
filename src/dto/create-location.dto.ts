import { IsNumber, IsString } from 'class-validator';

export class CreateLocationDto {
  @IsString()
  name: string;

  @IsNumber()
  regionId: number;
}
