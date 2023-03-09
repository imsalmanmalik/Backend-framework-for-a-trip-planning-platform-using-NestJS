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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Customer = class Customer {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, budget: { required: true, type: () => Number }, noOfAdults: { required: true, type: () => Number }, noOfChildren: { required: true, type: () => Number }, noOfDays: { required: true, type: () => Number }, phone: { required: true, type: () => String }, startDate: { required: true, type: () => Date } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Customer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Name', nullable: false, type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Customer.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Budget', nullable: false, type: 'int' }),
    __metadata("design:type", Number)
], Customer.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NoOfAdults', nullable: false, type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Customer.prototype, "noOfAdults", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NoOfChildren', nullable: false, type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Customer.prototype, "noOfChildren", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'NoOfDays', nullable: false, type: 'int', default: 1 }),
    __metadata("design:type", Number)
], Customer.prototype, "noOfDays", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Phone', nullable: false, type: 'varchar' }),
    __metadata("design:type", String)
], Customer.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'StartDate', nullable: false, type: 'timestamp' }),
    __metadata("design:type", Date)
], Customer.prototype, "startDate", void 0);
Customer = __decorate([
    (0, typeorm_1.Entity)({ name: 'Customer' })
], Customer);
exports.Customer = Customer;
//# sourceMappingURL=customer.entity.js.map