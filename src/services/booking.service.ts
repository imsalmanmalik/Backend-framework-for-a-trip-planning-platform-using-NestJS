import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from 'src/models/booking.entity';
import { CreateBookingDto } from '../dto/create-booking.dto';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
  ) {}
  private readonly logger = new Logger(BookingService.name);

  async findAll(): Promise<Booking[]> {
    try {
      const findBookings: Booking[] = await this.bookingRepository.find({});
      if (!findBookings) {
        throw 'No Activities found in the db.';
      }
      return findBookings;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number): Promise<Booking> {
    try {
      const findBooking: Booking = await this.bookingRepository.findOne({
        where: { id },
      });
      if (!findBooking) {
        throw 'No Booking found in the db.';
      }
      return findBooking;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: CreateBookingDto): Promise<Booking> {
    try {
      const saveBooking: Booking = await this.bookingRepository.save(data);
      if (!saveBooking) {
        throw 'Failed to create Booking in db.';
      }
      return saveBooking;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
