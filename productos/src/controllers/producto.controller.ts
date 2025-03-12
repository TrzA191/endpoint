/*
import { Request, Response } from "express";

export const getAllPrueba = (_req: Request, res: Response) => {
    res.status(200).json({ message: "hola UNACH" });
};
*/
//hace la solicitud y la peticion, router manda la solicitud hacia controller

/*
import { Request, Response } from "express";

export const getAllProductos = (_req: Request, res: Response): void => {
    res.json({ message: "hola UNACH" });
};
*/
//import { Request, Response } from "express";
import { Request, Response } from "express";
import client from "../models/db"; // Importa la conexión a la BD

export const obtenerProductos = async (_req: Request, res: Response) => {
    try {
        const [rows] = await client.query("SELECT * FROM Productos"); // Extrae rows correctamente
        res.json(rows); // Envía los productos como respuesta
    } catch (error) {
        console.error("Error al obtener productos:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};




