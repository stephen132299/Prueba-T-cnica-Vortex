import { Request, Response } from 'express';
import { serviceVehicle } from '../vehicle';
//import { Vehicle } from '../../entities/Vehicle';
import { getRepository, getManager  } from 'typeorm'
import { Vehicle } from '../../entities/Vehicle';


export class VehicleService implements serviceVehicle {
    constructor (){}
    //Función para registrar un vehículo
    async registerVehicle(req: Request, res: Response): Promise<Response>{
        try {
            
            const vehicle = req.body;
            vehicle.createAt = new Date();
            vehicle.updateAt = new Date();
            const plate = req.body.plate;

            //Verifica si el vehículo ya existe
            const existingVehicle = await getRepository(Vehicle).findOne({
                where: { plate: plate } 
            });

            if(existingVehicle) return res.status(400).json({ messagge: 'El vehículo ya existe' });
            //Crea el vehículo
            const newVehicle = await getRepository(Vehicle).create(vehicle);
            const createdVehicle = await getRepository(Vehicle).save(newVehicle);

            if (!createdVehicle) return res.status(400).json({ message: 'Error al crear el vehículo' });
            return res.status(200).json({ success: true, message: 'Vehículo creado con éxito' });
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno en el servidor' });
        }
    }
     //Función para actualizar un Vehículo
     async updateVehicle(req: Request, res: Response): Promise<Response>{
        try {
            const plate = req.params.id
            const vehicle = req.body
            plate.toUpperCase()
            vehicle.updateAt = new Date();
            
            const existingVehicle = await getRepository(Vehicle).findOne({
                where: { 
                    plate: plate
                }
            });
            
            if (!existingVehicle) return res.status(404).json({ message: 'El vehículo a actualizar no existe' });
            // Guarda los cambios en la base de datos
            const updatedVehicle = await getRepository(Vehicle).update({ plate: plate }, vehicle);
            
            if (!updatedVehicle || updatedVehicle.affected === 0) return res.status(400).json({ message: 'Error al actualizar el vehículo' });
            return res.status(200).json({ success: true, message: 'Vehículo actualizado con éxito', data: vehicle });

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    //Función para Buscar un vehículo por su placa
    async searchVehicleByPlate(req: Request, res: Response): Promise<Response>{
        try {
            const plate = req.params.id;
            plate.toUpperCase();
            const existingVehicle = await getRepository(Vehicle).findOne({ 
                where: { 
                    plate: plate
                }
            });

            if(!existingVehicle) return res.status(404).json({ message: 'El vehículo a buscar no existe' });
            return res.status(200).json({ success: true, message: 'Vehículo encontrado con éxito', data: existingVehicle });

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    //Función para eliminar un conductor
     async deleteVehicle(req: Request, res: Response): Promise<Response> {
        try {
            const plate = req.params.id;
            plate.toUpperCase();
            const existingVehicle = await getRepository(Vehicle).findOne({ 
                where: { 
                    plate: plate
                }
            });
            if (!existingVehicle) return res.status(404).json({ message: 'El vehículo a eliminar no existe' });
            // Elimina el vehículo de la base de datos
            const deletedDriver = await getRepository(Vehicle).delete({ plate: plate });
            
            if(!deletedDriver || deletedDriver.affected === 0) return res.status(400).json({ message: 'Error al eliminar el vehículo' });
            return  res.status(200).json({ success: true, message: 'Vehículo eliminado con éxito'});

        } catch (error) {
            console.error(error)
           return res.status(500).json({ message: 'Error interno del servidor' });
        } 
    }

}