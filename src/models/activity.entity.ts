import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Activity' })
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Name', nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({
    name: 'Description',
    nullable: true,
    type: 'varchar',
    length: 1024,
  })
  description: string;

  @Column({ name: 'Cost', nullable: false, type: 'int' })
  cost: number;

  @Column({ name: 'LocationId', nullable: true, type: 'int' })
  locationId: number;
}
