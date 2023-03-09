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
exports.Activity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let Activity = class Activity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, name: { required: true, type: () => String }, description: { required: true, type: () => String }, cost: { required: true, type: () => Number }, locationId: { required: true, type: () => Number } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Activity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Name', nullable: false, type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Activity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'Description',
        nullable: true,
        type: 'varchar',
        length: 1024,
    }),
    __metadata("design:type", String)
], Activity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'Cost', nullable: false, type: 'int' }),
    __metadata("design:type", Number)
], Activity.prototype, "cost", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'LocationId', nullable: true, type: 'int' }),
    __metadata("design:type", Number)
], Activity.prototype, "locationId", void 0);
Activity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Activity' })
], Activity);
exports.Activity = Activity;
//# sourceMappingURL=activity.entity.js.map