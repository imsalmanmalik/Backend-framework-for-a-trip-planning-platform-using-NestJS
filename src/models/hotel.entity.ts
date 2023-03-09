import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Hotel' })
export class Hotel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Name', nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'Rating', nullable: false, type: 'float' })
  rating: number;

  @Column({ name: 'Cost', nullable: false, type: 'int' })
  cost: number;

  @Column({ name: 'LocationId', nullable: true, type: 'int' })
  locationId: number;
}
