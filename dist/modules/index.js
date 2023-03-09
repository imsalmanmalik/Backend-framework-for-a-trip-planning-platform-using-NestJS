"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModules = void 0;
const common_1 = require("@nestjs/common");
const activity_module_1 = require("./activity.module");
const hotel_module_1 = require("./hotel.module");
const location_module_1 = require("./location.module");
const region_module_1 = require("./region.module");
const transport_module_1 = require("./transport.module");
const customer_module_1 = require("./customer.module");
const booking_module_1 = require("./booking.module");
let AppModules = class AppModules {
};
AppModules = __decorate([
    (0, common_1.Module)({
        imports: [
            hotel_module_1.HotelModule,
            activity_module_1.ActivityModule,
            location_module_1.LocationModule,
            region_module_1.RegionModule,
            transport_module_1.TransportModule,
            customer_module_1.CustomerModule,
            booking_module_1.BookingModule,
        ],
    })
], AppModules);
exports.AppModules = AppModules;
//# sourceMappingURL=index.js.map