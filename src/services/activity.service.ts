import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Activity } from './../models/activity.entity';
import { CreateActivityDto } from '../dto/create-activity.dto';

@Injectable()
export class ActivityService {
  constructor(
    @InjectRepository(Activity)
    private activityRepository: Repository<Activity>,
  ) {}
  private readonly logger = new Logger(ActivityService.name);

  async findAll(): Promise<Activity[]> {
    try {
      const findActivities: Activity[] = await this.activityRepository.find({});
      if (!findActivities) {
        throw 'No Activities found in the db.';
      }
      return findActivities;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number): Promise<Activity> {
    try {
      const findActivity: Activity = await this.activityRepository.findOne({
        where: { id },
      });
      if (!findActivity) {
        throw 'No Activity found in the db.';
      }
      return findActivity;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: CreateActivityDto): Promise<Activity> {
    try {
      const saveActivity: Activity = await this.activityRepository.save(data);
      if (!saveActivity) {
        throw 'Failed to create Activity in db.';
      }
      return saveActivity;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: CreateActivityDto) {
    try {
      const updateActivity = await this.activityRepository.update({ id }, data);
      if (updateActivity.affected > 0) {
        return 1;
      }
      throw 'Failed to update Activity in db.';
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
