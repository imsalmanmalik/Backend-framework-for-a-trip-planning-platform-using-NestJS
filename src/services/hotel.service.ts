import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hotel } from 'src/models/hotel.entity';
import { CreateHotelDto } from '../dto/create-hotel.dto';

@Injectable()
export class HotelService {
  constructor(
    @InjectRepository(Hotel)
    private hotelRepository: Repository<Hotel>,
  ) {}
  private readonly logger = new Logger(HotelService.name);

  async findAll(): Promise<Hotel[]> {
    try {
      const findHotels: Hotel[] = await this.hotelRepository.find({});
      if (!findHotels) {
        throw 'No hotels found in the db.';
      }
      return findHotels;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number): Promise<Hotel> {
    try {
      const findHotel: Hotel = await this.hotelRepository.findOne({
        where: { id },
      });
      if (!findHotel) {
        throw 'No hotel found in the db.';
      }
      return findHotel;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: CreateHotelDto): Promise<Hotel> {
    try {
      const saveHotel: Hotel = await this.hotelRepository.save(data);
      if (!saveHotel) {
        throw 'Failed to create hotel in db.';
      }
      return saveHotel;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: CreateHotelDto) {
    try {
      const updateHotel = await this.hotelRepository.update({ id }, data);
      if (updateHotel.affected > 0) {
        return 1;
      }
      throw 'Failed to update hotel in db.';
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
