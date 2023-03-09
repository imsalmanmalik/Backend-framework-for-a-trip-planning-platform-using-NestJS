import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Transport' })
export class Transport {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Name', nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({
    name: 'Make',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  make: string;

  @Column({
    name: 'Model',
    nullable: false,
    type: 'varchar',
    length: 100,
  })
  model: string;

  @Column({
    name: 'Year',
    nullable: false,
    type: 'int',
  })
  year: number;

  @Column({ name: 'Cost', nullable: false, type: 'int' })
  cost: number;
}
