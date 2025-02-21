/*
import { Request, Response } from "express";

export const getAllPrueba = (_req: Request, res: Response) => {
    res.status(200).json({ message: "hola UNACH" });
};
*/
//hace la solicitud y la peticion, router manda la solicitud hacia controller
import { Request, Response } from "express";

export const getAllApi_gateway = (_req: Request, res: Response): void => {
    res.json({ message: "hola mundooo" });
};
