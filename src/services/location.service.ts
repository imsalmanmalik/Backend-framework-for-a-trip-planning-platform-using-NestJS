import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from 'src/models/location.entity';
import { CreateLocationDto } from 'src/dto/create-location.dto';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}
  private readonly logger = new Logger(LocationService.name);

  async findAll(): Promise<Location[]> {
    try {
      const findActivities: Location[] = await this.locationRepository.find({});
      if (!findActivities) {
        throw 'No Activities found in the db.';
      }
      return findActivities;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number): Promise<Location> {
    try {
      const findLocation: Location = await this.locationRepository.findOne({
        where: { id },
      });
      if (!findLocation) {
        throw 'No Location found in the db.';
      }
      return findLocation;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: CreateLocationDto): Promise<Location> {
    try {
      const saveLocation: Location = await this.locationRepository.save(data);
      if (!saveLocation) {
        throw 'Failed to create Location in db.';
      }
      return saveLocation;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: CreateLocationDto) {
    try {
      const updateLocation = await this.locationRepository.update({ id }, data);
      if (updateLocation.affected > 0) {
        return 1;
      }
      throw 'Failed to update Location in db.';
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
