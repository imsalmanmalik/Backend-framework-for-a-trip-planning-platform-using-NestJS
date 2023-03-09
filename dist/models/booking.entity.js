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
exports.Booking = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Booking = class Booking {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, cost: { required: true, type: () => Number }, locationId: { required: true, type: () => Number }, activityId: { required: true, type: () => Number }, hotelId: { required: true, type: () => Number }, regionId: { required: true, type: () => Number }, customerId: { required: true, type: () => Number }, transportId: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Booking.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Cost', nullable: false, type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LocationId', nullable: true, type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "locationId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'ActivityId', nullable: true, type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "activityId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'HotelId', nullable: true, type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "hotelId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'RegionId', nullable: true, type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "regionId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'CustomerId', nullable: true, type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'TransportId', nullable: true, type: 'int' }),
    __metadata("design:type", Number)
], Booking.prototype, "transportId", void 0);
Booking = __decorate([
    (0, typeorm_1.Entity)({ name: 'Booking' })
], Booking);
exports.Booking = Booking;
//# sourceMappingURL=booking.entity.js.map