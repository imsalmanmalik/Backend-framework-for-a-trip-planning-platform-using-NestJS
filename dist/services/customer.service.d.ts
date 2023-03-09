import { Repository } from 'typeorm';
import { Customer } from '../models/customer.entity';
import { CreateCustomerDto } from '../dto/create-customer.dto';
export declare class CustomerService {
    private customerRepository;
    constructor(customerRepository: Repository<Customer>);
    private readonly logger;
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(data: CreateCustomerDto): Promise<Customer>;
    update(id: number, data: CreateCustomerDto): Promise<number>;
}
