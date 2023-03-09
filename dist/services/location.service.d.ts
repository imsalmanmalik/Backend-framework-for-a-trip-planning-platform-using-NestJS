import { Repository } from 'typeorm';
import { Location } from 'src/models/location.entity';
import { CreateLocationDto } from 'src/dto/create-location.dto';
export declare class LocationService {
    private locationRepository;
    constructor(locationRepository: Repository<Location>);
    private readonly logger;
    findAll(): Promise<Location[]>;
    findOne(id: number): Promise<Location>;
    create(data: CreateLocationDto): Promise<Location>;
    update(id: number, data: CreateLocationDto): Promise<number>;
}
