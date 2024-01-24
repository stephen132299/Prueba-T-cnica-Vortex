import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Order } from './Order';

@Entity()
export class Client {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 11, type: 'varchar'  })
    identification: string;
    
    @Column({ length: 30, type: 'varchar'  })
    firtsName: string;

    @Column({ length: 30, type: 'varchar' })
    lastName: string;
    
    @Column({ length: 10, type: 'varchar' })
    phone: string;
    
    @Column({ length: 50, type: 'varchar' })
    address: string;

    @Column({ length: 11, type: 'varchar' })
    nitBusiness: string

    @Column({ length: 40, type: 'varchar' })
    email: string;

    @Column({ type: 'date' })
    createAt: Date;

    @Column({ type: 'date' })
    updateAt: Date;

    @OneToMany(() => Order, order => order.client) //Llave fóranea Client - Order
    orders: Order[];


}