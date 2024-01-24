import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Vehicle } from './Vehicle';
import { Order } from './Order';

@Entity()
export class Driver {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 11, type: 'varchar'  })
    identification: string;
    
    @Column({ length: 30, type: 'varchar'  })
    firtsName: string;

    @Column({ length: 30, type: 'varchar' })
    lastName: string;

    @Column({ length: 3, type: 'varchar' })
    typeLicense: string;

    @Column({ length: 40, type: 'varchar' })
    email: string;

    @Column({ length: 50, type: 'varchar' })
    address: string;

    @Column({ length: 3, type: 'varchar' })
    RH:string

    @Column({ length: 10, type: 'varchar' })
    phone: string;

    @Column({ length: 4, type: 'varchar' })
    gender: string;

    @Column({ type: 'date' })
    createAt: Date;

    @Column({ type: 'date' })
    updateAt: Date;


    @OneToMany(() => Vehicle, vehicle => vehicle.driver)
    vehicles: Vehicle[];

    @OneToMany(() => Order, order => order.driver)
    orders: Order[];

}