import { Controller, Get, Param, Post, Put, Body } from '@nestjs/common';
import { Customer } from './../models/customer.entity';
import { CustomerService } from './../services/customer.service';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get()
  async findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Customer> {
    return this.customerService.findOne(id);
  }

  @Post()
  async create(@Body() data: CreateCustomerDto) {
    return this.customerService.create(data);
  }

  @Put('/:id')
  async update(@Param('id') id: number, @Body() data: CreateCustomerDto) {
    return this.customerService.update(id, data);
  }
}
