import { Entity, PrimaryGeneratedColumn,  Column, ManyToOne, ManyToMany, JoinTable} from 'typeorm';
import { Department } from './Department'
import { Route} from './Route'

@Entity()
export class Municipality {
    @PrimaryGeneratedColumn()
    id: number;

    @Column( { length: 30, type: 'varchar' })
    name: string;
   
    @ManyToOne(() => Department, deparment => deparment.municipalities)
    department: Department;

    @ManyToMany(() => Route, route => route.municipalitiesOrigin)
    @ManyToMany(() => Route, route => route.municipalitiesDestination)
    @JoinTable()
    routes: Route[];


}