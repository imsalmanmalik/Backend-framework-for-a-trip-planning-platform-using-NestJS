import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { TransportService } from 'src/services/transport.service';
import { Transport } from 'src/models/transport.entity';
import { CreateTransportDto } from './../dto/create-transport.dto';

@Controller('transport')
export class TransportController {
  constructor(private transportService: TransportService) {}

  @Get()
  async findAll(): Promise<Transport[]> {
    return this.transportService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Transport> {
    return this.transportService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateTransportDto) {
    return this.transportService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: CreateTransportDto) {
    return this.transportService.update(id, data);
  }
}
