import { createConnection } from 'typeorm';
import { Driver } from '../entities/Driver';
import { Vehicle } from '../entities/Vehicle';
import { Order } from '../entities/Order';
import { Client } from '../entities/Client';
import { Municipality } from '../entities/Municipality';
import { Department } from '../entities/Department';
import { Route } from '../entities/Route';

//Configuración de ORM para la conexión a la BD PostgreSQL
export const inicializateDatabase = async () => {
    await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "123",
      database: "transport",
      synchronize: true,
      logging: false,
      entities: [Driver, Vehicle, Order, Client, Municipality, Department, Route]
    });
  };