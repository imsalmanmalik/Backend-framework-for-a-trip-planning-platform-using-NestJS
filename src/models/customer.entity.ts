import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Customer' })
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Name', nullable: false, type: 'varchar', length: 255 })
  name: string;

  @Column({ name: 'Budget', nullable: false, type: 'int' })
  budget: number;

  @Column({ name: 'NoOfAdults', nullable: false, type: 'int', default: 1 })
  noOfAdults: number;

  @Column({ name: 'NoOfChildren', nullable: false, type: 'int', default: 0 })
  noOfChildren: number;

  @Column({ name: 'NoOfDays', nullable: false, type: 'int', default: 1 })
  noOfDays: number;

  @Column({ name: 'Phone', nullable: false, type: 'varchar' })
  phone: string;

  @Column({ name: 'StartDate', nullable: false, type: 'timestamp' })
  startDate: Date;
}
