import { Repository } from 'typeorm';
import { Region } from 'src/models/region.entity';
import { CreateRegionDto } from 'src/dto/create-region.dto';
export declare class RegionService {
    private regionRepository;
    constructor(regionRepository: Repository<Region>);
    private readonly logger;
    findAll(): Promise<Region[]>;
    findOne(id: number): Promise<Region>;
    create(data: CreateRegionDto): Promise<Region>;
    update(id: number, data: CreateRegionDto): Promise<number>;
}
