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

export const AgregarProducto = async (req: any, res: any) => {
    try {
        let { id, nombre, precio, descripcion, categoria } = req.body;

        if (!nombre || !precio || !descripcion || !categoria) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        // Si no se proporciona un ID, obtener el siguiente ID disponible
        if (!id) {
            const [result] = await client.execute("SELECT MAX(id) + 1 AS nextId FROM Productos");
            id = (result as any)[0].nextId || 1; // Si no hay registros, empezar en 1
        }

        const query = "INSERT INTO Productos (id, nombre, precio, descripcion, categoria) VALUES (?, ?, ?, ?, ?)";
        const values = [id, nombre, precio, descripcion, categoria];

        await client.execute(query, values);

        res.status(201).json({ message: "Producto agregado correctamente", id });
    } catch (error) {
        console.error("Error al agregar producto:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const ActualizarProducto = async (req: any, res: any) => {
    try {
        const { id } = req.params; // ID del producto a actualizar
        const { nombre, precio, descripcion, categoria } = req.body; // Datos nuevos

        if (!nombre || !precio || !descripcion || !categoria) {
            return res.status(400).json({ error: "Todos los campos son requeridos" });
        }

        const query = "UPDATE Productos SET nombre = ?, precio = ?, descripcion = ?, categoria = ? WHERE id = ?";
        const values = [nombre, precio, descripcion, categoria, id];

        const [result] = await client.execute(query, values);

        if ((result as any).affectedRows === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json({ message: "Producto actualizado correctamente" });
    } catch (error) {
        console.error("Error al actualizar producto:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

export const EliminarProducto = async (req: any, res: any) => {
    try {
        const { id } = req.params; // ID del producto a eliminar

        const query = "DELETE FROM Productos WHERE id = ?";
        const [result] = await client.execute(query, [id]);

        if ((result as any).affectedRows === 0) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        res.json({ message: "Producto eliminado correctamente" });
    } catch (error) {
        console.error("Error al eliminar producto:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};
