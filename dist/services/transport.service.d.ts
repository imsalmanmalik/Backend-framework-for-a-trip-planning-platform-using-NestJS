import { Repository } from 'typeorm';
import { Transport } from '../models/transport.entity';
import { CreateTransportDto } from '../dto/create-transport.dto';
export declare class TransportService {
    private transportRepository;
    constructor(transportRepository: Repository<Transport>);
    private readonly logger;
    findAll(): Promise<Transport[]>;
    findOne(id: number): Promise<Transport>;
    create(data: CreateTransportDto): Promise<Transport>;
    update(id: number, data: CreateTransportDto): Promise<number>;
}
