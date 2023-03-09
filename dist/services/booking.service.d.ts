import { Repository } from 'typeorm';
import { Booking } from 'src/models/booking.entity';
import { CreateBookingDto } from '../dto/create-booking.dto';
export declare class BookingService {
    private bookingRepository;
    constructor(bookingRepository: Repository<Booking>);
    private readonly logger;
    findAll(): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    create(data: CreateBookingDto): Promise<Booking>;
}
