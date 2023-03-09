"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var CustomerService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const customer_entity_1 = require("../models/customer.entity");
let CustomerService = CustomerService_1 = class CustomerService {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
        this.logger = new common_1.Logger(CustomerService_1.name);
    }
    async findAll() {
        try {
            const findCustomers = await this.customerRepository.find({});
            if (!findCustomers) {
                throw 'No Activities found in the db.';
            }
            return findCustomers;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const findCustomer = await this.customerRepository.findOne({
                where: { id },
            });
            if (!findCustomer) {
                throw 'No Customer found in the db.';
            }
            return findCustomer;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(data) {
        try {
            const saveCustomer = await this.customerRepository.save(data);
            if (!saveCustomer) {
                throw 'Failed to create Customer in db.';
            }
            return saveCustomer;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, data) {
        try {
            const updateCustomer = await this.customerRepository.update({ id }, data);
            if (updateCustomer.affected > 0) {
                return 1;
            }
            throw 'Failed to update Customer in db.';
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
CustomerService = CustomerService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(customer_entity_1.Customer)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map