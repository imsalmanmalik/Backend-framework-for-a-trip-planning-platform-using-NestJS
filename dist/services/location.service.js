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
var LocationService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const location_entity_1 = require("../models/location.entity");
let LocationService = LocationService_1 = class LocationService {
    constructor(locationRepository) {
        this.locationRepository = locationRepository;
        this.logger = new common_1.Logger(LocationService_1.name);
    }
    async findAll() {
        try {
            const findActivities = await this.locationRepository.find({});
            if (!findActivities) {
                throw 'No Activities found in the db.';
            }
            return findActivities;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const findLocation = await this.locationRepository.findOne({
                where: { id },
            });
            if (!findLocation) {
                throw 'No Location found in the db.';
            }
            return findLocation;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(data) {
        try {
            const saveLocation = await this.locationRepository.save(data);
            if (!saveLocation) {
                throw 'Failed to create Location in db.';
            }
            return saveLocation;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, data) {
        try {
            const updateLocation = await this.locationRepository.update({ id }, data);
            if (updateLocation.affected > 0) {
                return 1;
            }
            throw 'Failed to update Location in db.';
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
LocationService = LocationService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(location_entity_1.Location)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocationService);
exports.LocationService = LocationService;
//# sourceMappingURL=location.service.js.map