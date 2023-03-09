import { TransportService } from 'src/services/transport.service';
import { Transport } from 'src/models/transport.entity';
import { CreateTransportDto } from './../dto/create-transport.dto';
export declare class TransportController {
    private transportService;
    constructor(transportService: TransportService);
    findAll(): Promise<Transport[]>;
    findOne(id: number): Promise<Transport>;
    create(data: CreateTransportDto): Promise<Transport>;
    update(id: number, data: CreateTransportDto): Promise<number>;
}
