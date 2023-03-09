import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Region' })
export class Region {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Name', nullable: false, type: 'varchar', length: 255 })
  name: string;
}
