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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const region_service_1 = require("../services/region.service");
const create_region_dto_1 = require("../dto/create-region.dto");
let RegionController = class RegionController {
    constructor(regionService) {
        this.regionService = regionService;
    }
    async findAll() {
        return this.regionService.findAll();
    }
    async findOne(id) {
        return this.regionService.findOne(id);
    }
    async create(data) {
        return this.regionService.create(data);
    }
    async update(id, data) {
        return this.regionService.update(id, data);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RegionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], RegionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_region_dto_1.CreateRegionDto]),
    __metadata("design:returntype", Promise)
], RegionController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, create_region_dto_1.CreateRegionDto]),
    __metadata("design:returntype", Promise)
], RegionController.prototype, "update", null);
RegionController = __decorate([
    (0, common_1.Controller)('region'),
    __metadata("design:paramtypes", [region_service_1.RegionService])
], RegionController);
exports.RegionController = RegionController;
//# sourceMappingURL=region.controller.js.map