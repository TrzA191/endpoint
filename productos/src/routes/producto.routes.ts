
/*
import { Router } from "express";
import { getAllProductos } from "../controllers/producto.controller";


const router = Router();

// Endpoint GET: /productos/all 
router.get("/all", getAllProductos);  

export default router;
*/
import { Router } from "express";
import { obtenerProductos } from "../controllers/producto.controller";

const router = Router();

router.get("/all", obtenerProductos); // Ruta para obtener productos

export default router;

