import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Region } from 'src/models/region.entity';
import { CreateRegionDto } from 'src/dto/create-region.dto';

@Injectable()
export class RegionService {
  constructor(
    @InjectRepository(Region)
    private regionRepository: Repository<Region>,
  ) {}
  private readonly logger = new Logger(RegionService.name);

  async findAll(): Promise<Region[]> {
    try {
      const findRegions: Region[] = await this.regionRepository.find({});
      if (!findRegions) {
        throw 'No regions found in the db.';
      }
      return findRegions;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number): Promise<Region> {
    try {
      const findRegion: Region = await this.regionRepository.findOne({
        where: { id },
      });
      if (!findRegion) {
        throw 'No Activity found in the db.';
      }
      return findRegion;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: CreateRegionDto): Promise<Region> {
    try {
      const saveRegion: Region = await this.regionRepository.save(data);
      if (!saveRegion) {
        throw 'Failed to create Activity in db.';
      }
      return saveRegion;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: CreateRegionDto) {
    try {
      const updateRegion = await this.regionRepository.update({ id }, data);
      if (updateRegion.affected > 0) {
        return 1;
      }
      throw 'Failed to update Activity in db.';
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
