import express from "express";
import * as bodyParser from 'body-parser';
import routerVehicle from '../routes/vehicleRoutes';
import routerDriver from "../routes/driverRoutes";

const app = express();

// middleware para manejar el cuerpo de las solicitudes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuración de rutas
//Vehicle routes
app.use('/api/vehicle', routerVehicle);
//Driver routes
app.use('/api/driver', routerDriver);

export default app;