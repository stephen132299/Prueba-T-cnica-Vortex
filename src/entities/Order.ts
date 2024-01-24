import { Entity, PrimaryGeneratedColumn,  Column, ManyToOne } from 'typeorm';
import { Driver } from './Driver'
import { Client } from './Client';

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'text' })
    description: string;

    @Column({ length: 50, type: 'varchar' })
    address: string;

    @Column({ type: 'date' })
    createAt: Date;

    @Column({ type: 'date' })
    updateAt: Date;

    @ManyToOne(() => Driver, driver => driver.orders)
    driver: Driver;

    @ManyToOne(() => Client, client => client.orders)
    client: Client;
}