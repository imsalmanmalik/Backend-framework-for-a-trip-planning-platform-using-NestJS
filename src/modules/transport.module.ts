import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transport } from 'src/models/transport.entity';
import { TransportController } from '../controllers/transport.controller';
import { TransportService } from 'src/services/transport.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transport])],
  controllers: [TransportController],
  providers: [TransportService],
})
export class TransportModule {}
