import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel.entity';
import { CreateHotelDto } from '../dto/create-hotel.dto';
import { Config } from 'src/config';

@Controller('hotels')
export class HotelController {
  constructor(private hotelService: HotelService) {
    console.log('sadad', Config);
  }

  @Get()
  async findAll(): Promise<Hotel[]> {
    return this.hotelService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Hotel> {
    return this.hotelService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateHotelDto) {
    return this.hotelService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: CreateHotelDto) {
    return this.hotelService.update(id, data);
  }
}
