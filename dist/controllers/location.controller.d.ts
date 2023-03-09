import { Location } from 'src/models/location.entity';
import { LocationService } from 'src/services/location.service';
import { CreateLocationDto } from './../dto/create-location.dto';
export declare class LocationController {
    private locationService;
    constructor(locationService: LocationService);
    findAll(): Promise<Location[]>;
    findOne(id: number): Promise<Location>;
    create(data: CreateLocationDto): Promise<Location>;
    update(id: number, data: CreateLocationDto): Promise<number>;
}
