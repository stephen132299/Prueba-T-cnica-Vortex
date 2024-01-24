import { Entity, PrimaryGeneratedColumn,  Column, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { Municipality } from './Municipality'
import { Vehicle } from './Vehicle';

@Entity()
export class Route {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { length: 8, type: 'varchar' })
    distance: string;

    @Column({ length: 2, type: 'varchar' })
    numberPedages: string;

    @Column({ length: 4, type: 'varchar' })
    model: string;

    @Column({ type: 'date' })
    createAt: Date;

    @Column({ type: 'date' })
    updateAt: Date;

    @ManyToMany(() => Municipality, municipality => municipality.routes)//Llave fóranea Municipality - Route
    @JoinTable()
    municipalitiesOrigin: Municipality[];

    @ManyToMany(() => Municipality, municipality => municipality.routes)//Llave fóranea Municipality - Route
    @JoinTable()
    municipalitiesDestination: Municipality[];

    @OneToMany(() => Vehicle, vehicle => vehicle.route)//Llave fóranea Vehicle - Route
    vehicles: Vehicle[];
   
}