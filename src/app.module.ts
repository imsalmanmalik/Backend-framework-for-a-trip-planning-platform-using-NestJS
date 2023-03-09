import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModules } from './modules';
import { Config } from './config';
import { Hotel } from './models/hotel.entity';
import { Activity } from './models/activity.entity';
import { Transport } from './models/transport.entity';
import { Location } from './models/location.entity';
import { Region } from './models/region.entity';
import { Customer } from './models/customer.entity';
import { Booking } from './models/booking.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: Config.db.host,
      port: +Config.db.port,
      username: Config.db.username,
      password: Config.db.password,
      database: Config.db.database,
      synchronize: true,
      timezone: 'Z',
      entities: [
        Activity,
        Hotel,
        Transport,
        Customer,
        Location,
        Region,
        Booking,
      ],
    }),
    AppModules,
  ],
})
export class AppModule {}
