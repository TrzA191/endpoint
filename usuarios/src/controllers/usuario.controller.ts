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
            { id: 1, nombre: "Juan", correo:"juan@example.com" },
            { id: 2, nombre: "María",correo:"marian@example.com" },
            { id: 3, nombre: "carlos",correo:"carlos@example.com" }
        ]
    };

    res.json(response);
};
