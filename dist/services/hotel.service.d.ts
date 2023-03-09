import { Repository } from 'typeorm';
import { Hotel } from 'src/models/hotel.entity';
import { CreateHotelDto } from '../dto/create-hotel.dto';
export declare class HotelService {
    private hotelRepository;
    constructor(hotelRepository: Repository<Hotel>);
    private readonly logger;
    findAll(): Promise<Hotel[]>;
    findOne(id: number): Promise<Hotel>;
    create(data: CreateHotelDto): Promise<Hotel>;
    update(id: number, data: CreateHotelDto): Promise<number>;
}
