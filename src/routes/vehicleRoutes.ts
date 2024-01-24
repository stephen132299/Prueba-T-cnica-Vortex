import { Router } from 'express';
import { VehicleService } from '../services/controllers/vehicleController';

const routerVehicle = Router();
const vehicleService = new VehicleService();

routerVehicle.post('/register', vehicleService.registerVehicle);
routerVehicle.put('/update/:id', vehicleService.updateVehicle);
routerVehicle.get('/search/:id', vehicleService.searchVehicleByPlate);
routerVehicle.delete('/delete/:id', vehicleService.deleteVehicle);

export default routerVehicle;