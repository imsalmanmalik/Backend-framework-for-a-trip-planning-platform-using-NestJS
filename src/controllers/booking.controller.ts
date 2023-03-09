import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { Booking } from 'src/models/booking.entity';
import { BookingService } from 'src/services/booking.service';
import { CreateBookingDto } from './../dto/create-booking.dto';

@Controller('booking')
export class BookingController {
  constructor(private bookingService: BookingService) {}

  @Get()
  async findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Booking> {
    return this.bookingService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateBookingDto) {
    return this.bookingService.create(data);
  }
}
