import { Router } from 'express';
import { DriverService } from '../services/controllers/driverController';

const routerDriver = Router();
const driverService = new DriverService();

routerDriver.post('/register', driverService.registerDriver);
routerDriver.put('/update/:id', driverService.updateDriver);
routerDriver.get('/search/:id', driverService.searchByIdDriver);
routerDriver.delete('/delete/:id', driverService.deleteDriver);
routerDriver.put('/associate', driverService.associateDriverToVehicle);
routerDriver.put('/disassociate', driverService.disassociateDriverToVehicle);

export default routerDriver;