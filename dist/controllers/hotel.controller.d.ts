import { HotelService } from '../services/hotel.service';
import { Hotel } from '../models/hotel.entity';
import { CreateHotelDto } from '../dto/create-hotel.dto';
export declare class HotelController {
    private hotelService;
    constructor(hotelService: HotelService);
    findAll(): Promise<Hotel[]>;
    findOne(id: number): Promise<Hotel>;
    create(data: CreateHotelDto): Promise<Hotel>;
    update(id: number, data: CreateHotelDto): Promise<number>;
}
