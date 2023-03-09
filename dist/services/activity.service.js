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
var ActivityService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const activity_entity_1 = require("./../models/activity.entity");
let ActivityService = ActivityService_1 = class ActivityService {
    constructor(activityRepository) {
        this.activityRepository = activityRepository;
        this.logger = new common_1.Logger(ActivityService_1.name);
    }
    async findAll() {
        try {
            const findActivities = await this.activityRepository.find({});
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
            const findActivity = await this.activityRepository.findOne({
                where: { id },
            });
            if (!findActivity) {
                throw 'No Activity found in the db.';
            }
            return findActivity;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(data) {
        try {
            const saveActivity = await this.activityRepository.save(data);
            if (!saveActivity) {
                throw 'Failed to create Activity in db.';
            }
            return saveActivity;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, data) {
        try {
            const updateActivity = await this.activityRepository.update({ id }, data);
            if (updateActivity.affected > 0) {
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
ActivityService = ActivityService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(activity_entity_1.Activity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ActivityService);
exports.ActivityService = ActivityService;
//# sourceMappingURL=activity.service.js.map