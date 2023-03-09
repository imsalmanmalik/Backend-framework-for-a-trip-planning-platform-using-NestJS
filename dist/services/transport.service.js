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
var TransportService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transport_entity_1 = require("../models/transport.entity");
let TransportService = TransportService_1 = class TransportService {
    constructor(transportRepository) {
        this.transportRepository = transportRepository;
        this.logger = new common_1.Logger(TransportService_1.name);
    }
    async findAll() {
        try {
            const findTransports = await this.transportRepository.find({});
            if (!findTransports) {
                throw 'No Activities found in the db.';
            }
            return findTransports;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async findOne(id) {
        try {
            const findTransport = await this.transportRepository.findOne({
                where: { id },
            });
            if (!findTransport) {
                throw 'No Transport found in the db.';
            }
            return findTransport;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async create(data) {
        try {
            const saveTransport = await this.transportRepository.save(data);
            if (!saveTransport) {
                throw 'Failed to create Transport in db.';
            }
            return saveTransport;
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
    async update(id, data) {
        try {
            const updateTransport = await this.transportRepository.update({ id }, data);
            if (updateTransport.affected > 0) {
                return 1;
            }
            throw 'Failed to update Transport in db.';
        }
        catch (error) {
            this.logger.error(error);
            throw new common_1.HttpException(error.toString(), common_1.HttpStatus.BAD_REQUEST);
        }
    }
};
TransportService = TransportService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transport_entity_1.Transport)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransportService);
exports.TransportService = TransportService;
//# sourceMappingURL=transport.service.js.map