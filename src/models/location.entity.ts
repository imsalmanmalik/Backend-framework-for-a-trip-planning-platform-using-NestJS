import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Location' })
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Name', nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'RegionId', nullable: false, type: 'int' })
  regionId: number;
}
