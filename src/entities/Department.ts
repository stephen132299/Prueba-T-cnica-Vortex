import { Entity, PrimaryGeneratedColumn,  Column, OneToMany } from 'typeorm';
import { Municipality } from './Municipality'

@Entity()
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { length: 30, type: 'varchar' })
    name: string;
   
    @OneToMany(() => Municipality, municipality => municipality.department)
    municipalities: Municipality;

}