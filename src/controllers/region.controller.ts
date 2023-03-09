import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { Region } from 'src/models/region.entity';
import { RegionService } from 'src/services/region.service';
import { CreateRegionDto } from 'src/dto/create-region.dto';

@Controller('region')
export class RegionController {
  constructor(private regionService: RegionService) {}

  @Get()
  async findAll(): Promise<Region[]> {
    return this.regionService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Region> {
    return this.regionService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateRegionDto) {
    return this.regionService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: CreateRegionDto) {
    return this.regionService.update(id, data);
  }
}
