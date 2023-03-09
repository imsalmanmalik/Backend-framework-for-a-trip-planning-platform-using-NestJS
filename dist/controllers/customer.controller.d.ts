import { Customer } from './../models/customer.entity';
import { CustomerService } from './../services/customer.service';
import { CreateCustomerDto } from 'src/dto/create-customer.dto';
export declare class CustomerController {
    private customerService;
    constructor(customerService: CustomerService);
    findAll(): Promise<Customer[]>;
    findOne(id: number): Promise<Customer>;
    create(data: CreateCustomerDto): Promise<Customer>;
    update(id: number, data: CreateCustomerDto): Promise<number>;
}
