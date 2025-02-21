/*
import { Request, Response } from "express";

export const getAllPrueba = (_req: Request, res: Response) => {
    res.status(200).json({ message: "hola UNACH" });
};
*/
//hace la solicitud y la peticion, router manda la solicitud hacia controller
import { Request, Response } from "express";

export const getAllUsuarios = (_req: Request, res: Response): void => {
    res.json({ message: "se muestran los usuarios" });
};

//import { Request, Response } from "express";


export const gestUsuarios = (_req: Request, res: Response) : void => {
    const response = {
        nombreMetodo: "gestUsuarios",
        data: [
            { id: 1, nombre: "Dr. Ana López", especialidad:"Neurología" },
            { id: 2, nombre: "Dr Juan Osorio", especialidad:"Traumatologo"}
        ]
    };

    res.json(response);
};
