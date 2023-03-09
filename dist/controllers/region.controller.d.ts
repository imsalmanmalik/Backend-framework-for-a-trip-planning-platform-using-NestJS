import { Region } from 'src/models/region.entity';
import { RegionService } from 'src/services/region.service';
import { CreateRegionDto } from 'src/dto/create-region.dto';
export declare class RegionController {
    private regionService;
    constructor(regionService: RegionService);
    findAll(): Promise<Region[]>;
    findOne(id: number): Promise<Region>;
    create(data: CreateRegionDto): Promise<Region>;
    update(id: number, data: CreateRegionDto): Promise<number>;
}
