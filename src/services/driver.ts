import { Request, Response } from "express";

export interface DriverServie {
    registerDriver(req: Request, res: Response): Promise<Response>;
    updateDriver(req: Request, res: Response): Promise<Response>;
    searchByIdDriver(req: Request, res: Response): Promise<Response>;
    deleteDriver(req: Request, res: Response): Promise<Response>;
    associateDriverToVehicle(req: Request, res: Response): Promise<Response>;
    disassociateDriverToVehicle(req: Request, res: Response): Promise<Response>;
}