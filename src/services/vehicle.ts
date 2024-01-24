import { Request, Response } from "express";

export interface serviceVehicle {
    registerVehicle(req: Request, res: Response): Promise<Response>;
    updateVehicle(req: Request, res: Response): Promise<Response>;
    searchVehicleByPlate(req: Request, res: Response): Promise<Response>;
    deleteVehicle(req: Request, res: Response): Promise<Response>;
}