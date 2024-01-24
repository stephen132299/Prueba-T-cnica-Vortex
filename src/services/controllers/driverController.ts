import { Request, Response } from 'express';
import { DriverServie } from '../driver';
import { getRepository, In } from 'typeorm'
import { Vehicle } from '../../entities/Vehicle';
import { Driver } from '../../entities/Driver';

export class DriverService implements DriverServie {
    constructor (){}
    
    //Función para registrar un conductor
    async registerDriver(req: Request, res: Response): Promise<Response>{
        try {
            
            const driver = req.body;
            driver.createAt = new Date();
            driver.updateAt = new Date();
            const identification = req.body.identification;

            //Verifica si el conductor ya existe
            const existingDriver = await getRepository(Driver).findOne({
                where: { 
                    identification: identification 
                } 
            });

            if(existingDriver) return res.status(400).json({ messagge: 'El conductor ya existe' });
            //Crea el vehículo
            const newDriver = await getRepository(Driver).create(driver);
            const createdDriver = await getRepository(Driver).save(newDriver);

            if (!createdDriver) return res.status(400).json({ message: 'Error al crear el conductor' });
            return res.status(200).json({ success: true, message: 'Conductor creado con éxito' });

        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno en el servidor' });
        }
    }

    //Función para actualizar un conductor
    async updateDriver(req: Request, res: Response): Promise<Response>{
        try {
            const identification = req.params.id
            const driver = req.body
            driver.updateAt = new Date();
            console.log(identification, driver);
            
            const existingDriver = await getRepository(Driver).findOne({
                where: { 
                    identification: identification
                }
            });
            
            if (!existingDriver) return res.status(404).json({ message: 'El conductor a actualizar no existe' });
            // Guarda los cambios en la base de datos
            const updatedDriver = await getRepository(Driver).update({ identification: identification }, driver);

            if (!updatedDriver) return res.status(400).json({ message: 'Error al actualizar el conductor' });
            return res.status(200).json({ success: true, message: 'Conductor actualizado con éxito', data: driver });

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    //Función para Buscar un conductor por su Identificación
    async searchByIdDriver(req: Request, res: Response): Promise<Response>{
        try {
            const identification = req.params.id;
            const existingDriver = await getRepository(Driver).findOne({ 
                where: { 
                    identification: identification 
                }
            });

            if(existingDriver) return res.status(404).json({ message: 'El conductor a buscar no existe' });
            return res.status(200).json({ success: true, message: 'Conductor encontrado con éxito', data: existingDriver });

        } catch (error) {
            console.error(error)
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    //Función para eliminar un conductor
     async deleteDriver(req: Request, res: Response): Promise<Response> {
        try {
            const identification = req.params.id;
            const existingDriver = await getRepository(Driver).findOne({ 
                where: { 
                    identification: identification 
                }
            });
            if (!existingDriver) return res.status(404).json({ message: 'El conductor a eliminar no existe' });
            // Elimina el conductor de la base de datos
            const deletedDriver = await getRepository(Driver).delete({ identification: identification });
            if(!deletedDriver) return res.status(400).json({ message: 'Error al eliminar el conductor' });
            return  res.status(200).json({ success: true, message: 'Conductor eliminado con éxito'});

        } catch (error) {
            console.error(error)
           return res.status(500).json({ message: 'Error interno del servidor' });
        } 
    }

    //Función para Asociar conductor a vehículos
    async associateDriverToVehicle(req: Request, res: Response): Promise<Response>{
        try {
            const { driverId, vehiclePlates } = req.body;
                
            // Obtener la información del conductor
            const existingDriver = await getRepository(Driver).find({ 
                where: {
                    id: driverId
                }});
        
            if (!existingDriver)  return res.status(404).json({ success: false, message: 'Conductor no encontrado' });
            // Obtener los vehículos no asignados al conductor
            const vehicles = await getRepository(Vehicle).find({
                where: {
                    plate: In(vehiclePlates),
                    driver: undefined
                },
            });

            if (vehicles.length === 0) return res.status(404).json({ success: false, message: 'No se encontraron vehículos disponibles' });
                // Asociar al conductor a los vehículos
            vehicles.forEach(async (vehicle) => {
                vehicle.driver = driverId;
                await getRepository(Vehicle).update({plate: vehicle.plate}, vehicle);
            });

            return res.status(200).json({ success: true, message: 'Conductor asociado con éxito', data: vehicles });
                
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
    }

    async disassociateDriverToVehicle(req: Request, res: Response): Promise<Response> {
        try {
            const { driverId, vehiclePlates } = req.body;
                
            // Obtener la información del conductor
            const existingDriver = await getRepository(Driver).find({ 
                where: {
                    id: driverId
                }});
        
            if (!existingDriver)  return res.status(404).json({ success: false, message: 'Conductor no encontrado' });
            // Obtener los vehículos asignados al conductor
            const vehicles = await getRepository(Vehicle).find({
                where: {
                    plate: In(vehiclePlates),
                    driver: driverId
                },
            });

            if (vehicles.length === 0) return res.status(404).json({ success: false, message: 'No se encontraron vehículos asignados al conductor' });
                // desasociar el conductor de los vehículos
            vehicles.forEach(async (vehicle) => {
                vehicle.driver = null;
                await getRepository(Vehicle).update({plate: vehicle.plate}, vehicle);
            });

            return res.status(200).json({ success: true, message: 'Conductor desasociado con éxito', data: vehicles });
                
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor' });
        }
        
    }
    

}
