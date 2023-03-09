import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Booking' })
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Cost', nullable: false, type: 'int' })
  cost: number;

  @Column({ name: 'LocationId', nullable: true, type: 'int' })
  locationId: number;

  @Column({ name: 'ActivityId', nullable: true, type: 'int' })
  activityId: number;

  @Column({ name: 'HotelId', nullable: true, type: 'int' })
  hotelId: number;

  @Column({ name: 'RegionId', nullable: true, type: 'int' })
  regionId: number;

  @Column({ name: 'CustomerId', nullable: true, type: 'int' })
  customerId: number;

  @Column({ name: 'TransportId', nullable: true, type: 'int' })
  transportId: number;
}
