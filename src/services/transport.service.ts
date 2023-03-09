import { Injectable, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transport } from '../models/transport.entity';
import { CreateTransportDto } from '../dto/create-transport.dto';

@Injectable()
export class TransportService {
  constructor(
    @InjectRepository(Transport)
    private transportRepository: Repository<Transport>,
  ) {}
  private readonly logger = new Logger(TransportService.name);

  async findAll(): Promise<Transport[]> {
    try {
      const findTransports: Transport[] = await this.transportRepository.find(
        {},
      );
      if (!findTransports) {
        throw 'No Activities found in the db.';
      }
      return findTransports;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async findOne(id: number): Promise<Transport> {
    try {
      const findTransport: Transport = await this.transportRepository.findOne({
        where: { id },
      });
      if (!findTransport) {
        throw 'No Transport found in the db.';
      }
      return findTransport;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async create(data: CreateTransportDto): Promise<Transport> {
    try {
      const saveTransport: Transport = await this.transportRepository.save(
        data,
      );
      if (!saveTransport) {
        throw 'Failed to create Transport in db.';
      }
      return saveTransport;
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }

  async update(id: number, data: CreateTransportDto) {
    try {
      const updateTransport = await this.transportRepository.update(
        { id },
        data,
      );
      if (updateTransport.affected > 0) {
        return 1;
      }
      throw 'Failed to update Transport in db.';
    } catch (error: any) {
      this.logger.error(error);
      throw new HttpException(error.toString(), HttpStatus.BAD_REQUEST);
    }
  }
}
