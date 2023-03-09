import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { Location } from 'src/models/location.entity';
import { LocationService } from 'src/services/location.service';
import { CreateLocationDto } from './../dto/create-location.dto';

@Controller('location')
export class LocationController {
  constructor(private locationService: LocationService) {}

  @Get()
  async findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Location> {
    return this.locationService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateLocationDto) {
    return this.locationService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: CreateLocationDto) {
    return this.locationService.update(id, data);
  }
}
