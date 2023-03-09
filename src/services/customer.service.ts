import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../models/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private customerRepository: Repository<Customer>,
  ) {}
  private readonly logger = new Logger(CustomerService.name);

  async findAll(): Promise<Customer[]> {
    try {
      const findCustomers: Customer[] = await this.customerRepository.find({});
      if (!findCustomers) {
        throw 'No Activities found in the db.';
      }
      return findCustomers;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number): Promise<Customer> {
    try {
      const findCustomer: Customer = await this.customerRepository.findOne({
        where: { id },
      });
      if (!findCustomer) {
        throw 'No Customer found in the db.';
      }
      return findCustomer;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: CreateCustomerDto): Promise<Customer> {
    try {
      const saveCustomer: Customer = await this.customerRepository.save(data);
      if (!saveCustomer) {
        throw 'Failed to create Customer in db.';
      }
      return saveCustomer;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: CreateCustomerDto) {
    try {
      const updateCustomer = await this.customerRepository.update({ id }, data);
      if (updateCustomer.affected > 0) {
        return 1;
      }
      throw 'Failed to update Customer in db.';
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
