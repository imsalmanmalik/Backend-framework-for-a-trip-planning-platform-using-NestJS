import { Module } from '@nestjs/common';
import { ActivityModule } from './activity.module';
import { HotelModule } from './hotel.module';
import { LocationModule } from './location.module';
import { RegionModule } from './region.module';
import { TransportModule } from './transport.module';
import { CustomerModule } from './customer.module';
import { BookingModule } from './booking.module';

@Module({
  imports: [
    HotelModule,
    ActivityModule,
    LocationModule,
    RegionModule,
    TransportModule,
    CustomerModule,
    BookingModule,
  ],
})
export class AppModules {}
