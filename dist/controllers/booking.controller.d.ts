import { Booking } from 'src/models/booking.entity';
import { BookingService } from 'src/services/booking.service';
import { CreateBookingDto } from './../dto/create-booking.dto';
export declare class BookingController {
    private bookingService;
    constructor(bookingService: BookingService);
    findAll(): Promise<Booking[]>;
    findOne(id: number): Promise<Booking>;
    create(data: CreateBookingDto): Promise<Booking>;
}
