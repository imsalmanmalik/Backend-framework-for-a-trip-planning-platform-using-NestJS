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
var RegionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const region_entity_1 = require("../models/region.entity");
let RegionService = RegionService_1 = class RegionService {
    constructor(regionRepository) {
        this.regionRepository = regionRepository;
        this.logger = new common_1.Logger(RegionService_1.name);
    }
    async findAll() {
        try {
            const findRegions = await this.regionRepository.find({});
            if (!findRegions) {
                throw 'No regions found in the db.';
            }
            return findRegions;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const findRegion = await this.regionRepository.findOne({
                where: { id },
            });
            if (!findRegion) {
                throw 'No Activity found in the db.';
            }
            return findRegion;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(data) {
        try {
            const saveRegion = await this.regionRepository.save(data);
            if (!saveRegion) {
                throw 'Failed to create Activity in db.';
            }
            return saveRegion;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, data) {
        try {
            const updateRegion = await this.regionRepository.update({ id }, data);
            if (updateRegion.affected > 0) {
                return 1;
            }
            throw 'Failed to update Activity in db.';
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
RegionService = RegionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(region_entity_1.Region)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegionService);
exports.RegionService = RegionService;
//# sourceMappingURL=region.service.js.map