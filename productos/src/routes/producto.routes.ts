
/*
import { Router } from "express";
import { getAllProductos } from "../controllers/producto.controller";


const router = Router();

// Endpoint GET: /productos/all 
router.get("/all", getAllProductos);  

export default router;
*/
import { Router } from "express";
import { ActualizarProducto, AgregarProducto, EliminarProducto, obtenerProductos } from "../controllers/producto.controller";

const router = Router();

router.get("/all", obtenerProductos); // Ruta para obtener productos
router.post("/agregar", AgregarProducto);
router.put("/actualizar/:id", ActualizarProducto);
router.delete("/eliminar/:id", EliminarProducto);
export default router;

