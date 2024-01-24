import { Entity, PrimaryGeneratedColumn,  Column, ManyToOne, OneToMany } from 'typeorm';
import { Driver } from './Driver'
import { Route } from './Route';

@Entity()
export class Vehicle {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { length: 7, type: 'varchar' })
    plate: string;

    @Column({ length: 8, type: 'varchar' })
    loadCapacity: string;

    @Column({ length: 4, type: 'varchar' })
    model: string;

    @Column({ type: 'date' })
    createAt: Date;

    @Column({ type: 'date' })
    updateAt: Date;

    @ManyToOne(() => Driver, driver => driver.vehicles)
    driver?: Driver | null;

    @ManyToOne(() => Route, route => route.vehicles)
    route: Route;
}   