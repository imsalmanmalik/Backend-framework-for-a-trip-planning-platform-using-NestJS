import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { Activity } from './../models/activity.entity';
import { ActivityService } from 'src/services/activity.service';
import { CreateActivityDto } from '../dto/create-activity.dto';

@Controller('activity')
export class ActivityController {
  constructor(private activityService: ActivityService) {}

  @Get()
  async findAll(): Promise<Activity[]> {
    return this.activityService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Activity> {
    return this.activityService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateActivityDto) {
    return this.activityService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: CreateActivityDto) {
    return this.activityService.update(id, data);
  }
}
